//import { Fragment } from 'react'
// import {
//   Popover,
//   PopoverButton,
//   PopoverPanel,
//   Transition,
// } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Flyout2Col({ menuName, menuObject }) {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//   const togglePopover = () => {
//     setIsPopoverOpen((prev) => !prev);
//   };
//   useEffect(() => {
//     console.log("isPopoverOpen updated:", isPopoverOpen);
//   }, [isPopoverOpen]); // Triggered whenever `isPopoverOpen` changes

//   return (
//     <Popover className="relative focus:border-0">
//       <>
//         <PopoverButton
//           onClick={togglePopover}
//           className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700 focus:outline-none"
//         >
//           <span>{menuName}</span>
//           <ChevronDownIcon
//             className="h-5 w-5 border-0 border-white"
//             aria-hidden="true"
//           />
//         </PopoverButton>
//         {isPopoverOpen && (
//           <div>
//             <Transition
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
//                 <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
//                   <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
//                     {menuObject.map((item) => (
//                       <div
//                         key={item.name}
//                         className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
//                       >
//                         <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <item.icon
//                             className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
//                             aria-hidden="true"
//                           />
//                         </div>
//                         <div>
//                           <Link
//                             to={item.href}
//                             className="font-semibold text-gray-900"
//                             onClick={setIsPopoverOpen(false)}
//                           >
//                             {item.name}
//                             <span className="absolute inset-0" />
//                           </Link>
//                           <p className="mt-1 text-gray-600">
//                             {item.description}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="bg-gray-50 px-8 py-6">
//                     <div className="flex items-center gap-x-3">
//                       <h3 className="text-sm font-semibold leading-6 text-gray-900">
//                         Enterprise
//                       </h3>
//                       <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
//                         New
//                       </p>
//                     </div>
//                     <p className="mt-2 text-sm leading-6 text-gray-600">
//                       Empower your entire team with even more advanced tools.
//                     </p>
//                   </div>
//                 </div>
//               </PopoverPanel>
//             </Transition>
//           </div>
//         )}
//       </>
//     </Popover>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Flyout2Col({
  menuName,
  menuObject,
 
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const {currentUser}= useAuth()
  // useEffect(() => {
  //   console.log("isPopoverOpen updated:", isPopoverOpen);
  // }, [isPopoverOpen]);

  

  return (
    <Popover className="relative focus:border-0">
      <>
        <PopoverButton
       
          className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700 focus:outline-none"
        >
          <span onClick={()=>setIsPopoverOpen(true)} >{menuName}</span>
          <ChevronDownIcon
            className="h-5 w-5 border-0 border-white"
            aria-hidden="true"
          />
        </PopoverButton>
        {isPopoverOpen && 
        <div>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                <PopoverButton as="div" className="font-semibold text-gray-900" >
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {menuObject.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        {currentUser && 
                        <>
                        
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        
                        <div>
                          <Link to={item.to} onClick={()=>setIsPopoverOpen(false)}>
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                        </>
                      }
                      </div>
                    ))}
                  </div>
                </PopoverButton>

                <div className="bg-gray-50 px-8 py-6">
                  <div className="flex items-center gap-x-3">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      Enterprise
                    </h3>
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                      New
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Empower your entire team with even more advanced tools.
                  </p>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </div>
         }
      </>
    </Popover>
  );
}
