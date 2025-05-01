import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import EmployementForm from "./pages/EmployementForm";
import Department from "./pages/Department";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeActivation from "./pages/EmployeeActivation";
import EmployeeDeActivation from "./pages/EmployeeDeActivation";
import EmployeeList from "./pages/EmployeeList";
import { StepProvider } from "./components/stepContext";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LeaveRequest from "./pages/LeaveRequest";
import ApproveLeave from "./pages/ApproveLeave";
import Suspension from "./pages/Suspension";
import CancelSuspension from "./pages/CancelSuspension";
import Deisgnation from "./pages/Deisgnation";
import SalarayMatrix from "./pages/SalarayMatrix";

function App() {

  return (
    <>
      <AuthProvider>
        <Navigation />

        <ToastContainer />
       
        <Routes>
        <Route
            path="/salarymatrix"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <SalarayMatrix />{" "}
              </ProtectedRoutes>
            }
          />
        <Route
            path="/designation"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <Deisgnation />{" "}
              </ProtectedRoutes>
            }
          />
        <Route
            path="/cancelsuspension"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <CancelSuspension />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/suspension"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <Suspension />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/leaveapproval"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <ApproveLeave />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/leaveRequest"
            element={
              <ProtectedRoutes
                roles={["Manager", "Supervisor", "Trainee Officer"]}
                departments={["Admin", "Sales", "Production", "Finance"]}
              >
                <LeaveRequest />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/department"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <Department />{" "}
              </ProtectedRoutes>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/employementform"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <StepProvider>
                  {" "}
                  <EmployementForm />
                </StepProvider>{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/EmployeeActivation"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <EmployeeActivation />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/EmployeeDeActivation"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                <EmployeeDeActivation />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="EmployeeList"
            element={
              <ProtectedRoutes roles={["Manager"]} departments={["Admin"]}>
                {" "}
                <EmployeeList />{" "}
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<Header />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
