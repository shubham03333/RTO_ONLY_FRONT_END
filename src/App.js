import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Complain from "./components/pages/userpages/Complain";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/pages/inc/Login";
import Signup from "./components/pages/inc/Signup";
import RegistrationForm from "./components/pages/inc/RegistrationForm";
import UserHome from "./components/pages/userpages/UserHome";
import AdminHome from "./components/pages/adminpages/AdminHome";
import UserTable from "./components/tables/UserTable";
import AdminLogin from "./components/pages/adminpages/Login";
import ViewUser from "./components/pages/adminpages/ViewUsers";
import UpdateUser from "./components/pages/adminpages/UpdateUser";
import RcTable from "./components/tables/RcTable";
import ViewRc from "./components/pages/adminpages/ViewRc";
import UpdateRc from "./components/pages/adminpages/UpdateRc";
import VtransferTable from "./components/tables/VtransferTable ";
import UpdateVTransfer from "./components/pages/adminpages/UpdateVTransfer";
import VehicleRegistration from "./components/pages/userpages/VehicleRegistration";
import OwnershipTransfer from "./components/pages/userpages/OwnershipTransfer";
import ApplyPermit from "./components/pages/userpages/ApplyPermit";
import ApplyPuc from "./components/pages/userpages/ApplyPuc";
import ApplyLL from "./components/pages/userpages/ApplyLL";
import ApplyDL from "./components/pages/userpages/ApplyDL";
import PermitTable from "./components/tables/PermitTable";
import ViewPermit from "./components/pages/adminpages/ViewPermit";
import UpdatePermit from "./components/pages/adminpages/UpdatePermit";
import PucTable from "./components/tables/PucTable";
import ViewPuc from "./components/pages/adminpages/ViewPuc";
import UpdatePuc from "./components/pages/adminpages/UpdatePuc";
import ComplainTable from "./components/tables/ComplainTable ";
import ViewComplain from "./components/pages/adminpages/ViewComplain";
import UpdateComplain from "./components/pages/adminpages/UpdateComplain";
import LLTable from "./components/tables/LLTable";
import DLTable from "./components/tables/DLTable";
import ViewLL from "./components/pages/adminpages/ViewLL";
import ViewDL from "./components/pages/adminpages/ViewDL";
import UpdateLL from "./components/pages/adminpages/UpdateLL";
import UpdateDL from "./components/pages/adminpages/UpdateDL";
import LLStatus from "./components/pages/userpages/LLStatus";
import ViewUsersProfile from "./components/pages/adminpages/ViewUsersProfile";
import DLStatus from "./components/pages/userpages/DLStatus";
import RcStatus from "./components/pages/userpages/RcStatus";
import VehicleTransferStatus from "./components/pages/userpages/VehicleTransferStatus";
import PermitStatus from "./components/pages/userpages/PermitStatus";
import PucStatus from "./components/pages/userpages/PucStatus";
import ViewPayment from "./components/pages/adminpages/ViewPayment";
import PaymentTable from "./components/tables/PaymentTable";
import Payment from "./components/pages/userpages/Payment";
import DLDownload from "./components/pages/inc/CertificateGenerator/testCertificate";
import LLDownload from "./components/pages/inc/CertificateGenerator/LLCertficate";
import RCDownload from "./components/pages/inc/CertificateGenerator/RCCertificate";
import PermitDownload from "./components/pages/inc/CertificateGenerator/PermitCertificate";
import PucDownload from "./components/pages/inc/CertificateGenerator/PucCertificate";
import Privacy from "./components/pages/inc/staticpages/Privacy";
import ViewVehicleTransfer from "./components/pages/adminpages/ViewVehicleTransfer";
import ViewVehicleTransferCertificate from "./components/pages/adminpages/ViewVehicleTransferCertificate";
import ResetPassword from "./components/pages/userpages/ResetPassword";
import ErrorPage from "./components/pages/ErrorPage";
import RtoQuiz from "./components/pages/inc/exam/RtoQuiz";
import Timer from "./components/pages/inc/exam/Timmer";
function App() {
  const { id, name } = sessionStorage;
  console.log(id);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/complaint" element={<Complain />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          {id && <Route exact path="/userHome" element={<UserHome />} />}
          {/* <Route path="/table" element={<UserTable />} /> */}
          {id && <Route exact path="/adminHome" element={<AdminHome />} />}
          <Route
            exact
            path="/view-userProfile/:id"
            element={<ViewUsersProfile />}
          />
          <Route
            exact
            path="/view-vtransfer/:id"
            element={<ViewVehicleTransfer />}
          />
          <Route exact path="/update-user/:id" element={<UpdateUser />} />
          <Route
            exact
            path="/update-vtransfer/:id"
            element={<UpdateVTransfer />}
          />
          <Route exact path="/update-rc/:id" element={<UpdateRc />} />
          <Route exact path="/view-user/:id" element={<ViewUser />} />
          <Route exact path="/view-rc/:id" element={<ViewRc />} />
          {id && <Route exact path="/permitTable" element={<PermitTable />} />}
          {id && <Route exact path="/rcTable" element={<RcTable />} />}
          {id && (
            <Route exact path="/vtransferTable" element={<VtransferTable />} />
          )}
          {id && <Route exact path="/userTable" element={<UserTable />} />}
          {id && <Route exact path="/pucTable" element={<PucTable />} />}
          {id && (
            <Route exact path="/complainTable" element={<ComplainTable />} />
          )}
          {id && <Route exact path="/llTable" element={<LLTable />} />}
          <Route exact path="/update-ll/:id" element={<UpdateLL />} />
          {id && <Route exact path="/dlTable" element={<DLTable />} />}
          {id && (
            <Route exact path="/paymentTable" element={<PaymentTable />} />
          )}
          <Route exact path="/update-dl/:id" element={<UpdateDL />} />

          {id && (
            <Route
              exact
              path="/view-vtransfercer/:id"
              element={<ViewVehicleTransferCertificate />}
            />
          )}

          {id && (
            <Route
              exact
              path="/vehicleRegistration"
              element={<VehicleRegistration />}
            />
          )}
          {id && (
            <Route
              exact
              path="/ownerShipTransfer"
              element={<OwnershipTransfer />}
            />
          )}
          {id && <Route exact path="/applyPermit" element={<ApplyPermit />} />}
          {id && <Route exact path="/applyPuc" element={<ApplyPuc />} />}
          {id && <Route exact path="/applyLL" element={<ApplyLL />} />}
          {id && <Route exact path="/applyDL" element={<ApplyDL />} />}
          <Route exact path="/view-permit/:id" element={<ViewPermit />} />
          <Route exact path="/update-permit/:id" element={<UpdatePermit />} />
          <Route exact path="/view-puc/:id" element={<ViewPuc />} />
          <Route exact path="/update-puc/:id" element={<UpdatePuc />} />
          <Route exact path="/view-complain/:id" element={<ViewComplain />} />
          <Route
            exact
            path="/update-complain/:id"
            element={<UpdateComplain />}
          />
          <Route exact path="/view-ll/:id" element={<ViewLL />} />
          <Route exact path="/view-dl/:id" element={<ViewDL />} />
          {id && <Route exact path="/llstatus" element={<LLStatus />} />}
          {id && <Route exact path="/dlstatus" element={<DLStatus />} />}
          {id && <Route exact path="/rcstatus" element={<RcStatus />} />}
          {id && (
            <Route
              exact
              path="/transferstatus"
              element={<VehicleTransferStatus />}
            />
          )}
          {id && (
            <Route exact path="/permitstatus" element={<PermitStatus />} />
          )}
          {id && <Route exact path="/pucstatus" element={<PucStatus />} />}

          <Route exact path="/view-payment/:id" element={<ViewPayment />} />

          {id && <Route exact path="/payment" element={<Payment />} />}
          <Route exact path="/dldownload" element={<DLDownload />} />
          <Route exact path="/lldownload" element={<LLDownload />} />
          <Route exact path="/rcdownload" element={<RCDownload />} />
          <Route exact path="/permitdownload" element={<PermitDownload />} />
          <Route exact path="/pucdownload" element={<PucDownload />} />
          <Route exact path="/privacypolicy" element={<Privacy />} />
          <Route exact path="/payment/:id" element={<Payment />} />
          <Route exact path="/resetPassword" element={<ResetPassword />} />
          <Route exact path="/quiz" element={<RtoQuiz />} />
          <Route exact path="/timer" element={<Timer />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
