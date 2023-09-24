import { Routes,  Route } from "react-router-dom";

import LoginForm from '../pages/site-customer/login/Login';

import RegisterForm from '../pages/site-customer/register/Register'
import CreateRequestForm from './../pages/site-customer/request/CreateRequestForm'
import ShowRequestDetails from './../pages/site-customer/request/RequestDetails'
import RequestManage from "../pages/site-customer/dashboard/RequestManage";

import Users from './../components/molecules/users-management/Users';
import MyComponent from './../components/molecules/example/MyComponent'
// import history from "./history"

function RoutesUser() {
    return (
        <Routes  >
            <Route path="/" element={<RequestManage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/request/add" element={<CreateRequestForm />} />
            <Route path="/request/edit/:id" element={<CreateRequestForm />} />
            <Route path="/student/detail/:id" element={<ShowRequestDetails />} />

            <Route path="/my" element={<MyComponent />} />
            <Route path="/user" element={<Users />} />
          </Routes>
      );
    }
  export default RoutesUser