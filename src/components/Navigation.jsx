import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import { Bell, CircleX, MenuIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FlyoutMenu from "./FlyoutMenu";
import Flyout2Col from "./Flyout2Col";
import { getEmployeeMenus, getHRJobsMenus, getPayrollMenus } from "./Menus";
import logo from "../images/logo.png";
import avatar from "../images/men_avatar.png";
import { useAuth } from "./AuthContext";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase-config";
import Drawer from "./Drawer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const classDefinition =
  "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-800 hover:border-indigo-500 hover:text-indigo-700 focus:border-indigo-500";

function Navigation() {
  const navigate = useNavigate();
  const [messageCount, setMessageCount] = useState(0);
  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { currentUser, logout,isOpen, toggleOpen } = useAuth();

  const authenticator = () => {
    if (currentUser) {
      logout();
      navigate("/signin");
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      setMessageCount(0);
      return;
    }

    const notificationsRef = collection(db, "updates");

    // Query for messages where recipientId matches current user's ID
    const q = query(
      notificationsRef,
      where("recipientID", "array-contains", currentUser._id),
      where("read", "==", false)
    );

    // Subscribe to Firestore changes
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessageCount(snapshot.size); // Update message count
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      setUserMessages([]);
      return;
    }

    // Reference the Firestore collection
    const notificationsRef = collection(db, "updates");

    // Query to fetch messages for the current user
    const q = query(
      notificationsRef,
      where("recipientID", "array-contains", currentUser._id),
      orderBy("timestamp", "desc")
    );

    // Real-time subscription to Firestore
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID
        ...doc.data(), // Include document data
      }));
      setUserMessages(messages); // Update state with messages
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  },[currentUser] );

  // 

  const displayMessage = (message) => {
    toggleOpen()
    setMessage(message);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-indigo-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CircleX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      //  className="h-12 w-auto"
                      src={logo}
                      alt="PayQuick Logo"
                      className="w-28"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    // className="inline-flex items-center border-b-2  focus:border-indigo-500  px-1 pt-1 text-sm font-medium text-gray-900"
                    className={classDefinition}
                    to="/"
                  >
                    Dashboard
                  </Link>
                  {/* <PopoverPanel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5"> */}
                  <span to="#" className={classDefinition}>
                    <Flyout2Col
                      menuName={"Employee Management"}
                      menuObject={getEmployeeMenus()}
                      // isPopoverOpen={isPopoverOpen}
                      //togglePopover={togglePopover}
                    />
                  </span>
                  {/* </PopoverPanel> */}
                  <span to="#" className={classDefinition}>
                    <FlyoutMenu
                      menuName={"HR Jobs"}
                      menuObject={getHRJobsMenus()}
                    />
                  </span>
                  <span to="#" className={classDefinition}>
                    <FlyoutMenu
                      menuName={"Payroll"}
                      menuObject={getPayrollMenus()}
                    />
                  </span>
                  <span to="/report" className={classDefinition}>
                    Report
                  </span>
                </div>
              </div>
              {isOpen && <Drawer message={message} messages={userMessages} />}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <Bell className="h-6 w-6 mt-2" aria-hidden="true" />
                      <span className=" absolute text-red-500 font-bold ml-2 top-0 right-0">
                        {messageCount}
                      </span>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {messageCount > 0 ? (
                        userMessages.map((message) => (
                          <MenuItem key={message.id}>
                            {({ focus }) => (
                              <span
                                // to={currentUser? "/":"/signin"}
                                onClick={() => displayMessage(message)}
                                className={classNames(
                                  focus ? "bg-gray-100" : "", !message.read? "font-bold":"",
                                  "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                                )}
                              >
                                {message.message} -{" "}
                                {message.timestamp?.toDate().toLocaleString()}
                              </span>
                            )}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>
                          {({ focus }) => (
                            <span
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              No message
                            </span>
                          )}
                        </MenuItem>
                      )}
                    </MenuItems>
                  </Transition>
                </Menu>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={currentUser ? currentUser.profilePics.src : avatar}
                        alt="Current User Picture"
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {currentUser && (
                        <>
                          <MenuItem>
                            {({ focus }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ focus }) => (
                              <a
                                href="#"
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </MenuItem>
                        </>
                      )}

                      <MenuItem>
                        {({ focus }) => (
                          <span
                            // to={currentUser? "/":"/signin"}
                            onClick={authenticator}
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                            )}
                          >
                            {currentUser ? "Logout" : "Login"}
                          </span>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <DisclosureButton
                as="nav"
                className="block border-l-4  border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                <Link to="/">Dashboard</Link>
              </DisclosureButton>

              <DisclosureButton
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Flyout2Col
                  menuName={"Employee Management"}
                  menuObject={getEmployeeMenus()}
                />
              </DisclosureButton>
              <DisclosureButton
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <FlyoutMenu
                  menuName={"HR Jobs"}
                  menuObject={getHRJobsMenus()}
                />
              </DisclosureButton>
              <DisclosureButton
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <FlyoutMenu
                  menuName={"Payroll"}
                  menuObject={getPayrollMenus()}
                />
              </DisclosureButton>
              <DisclosureButton
                as="Link"
                to="/report"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Report
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
export default Navigation;
