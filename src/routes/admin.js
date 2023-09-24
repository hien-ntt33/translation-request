import { Routes,  Route } from "react-router-dom";

import Home from './../components/molecules/home';

import StudentManage from './../pages/site-admin/student-management/StudentManage'
import CreateStudentForm from './../pages/site-admin/student-management/CreateStudentForm'
import ShowStudentDetail from './../pages/site-admin/student-management/ShowStudentDetail'

import Users from './../components/molecules/users-management/Users';
import MyComponent from './../components/molecules/example/MyComponent'
// import history from "./history"

function RoutesAdmin() {
    return (
        <Routes  >
            <Route path="/" element={<Home />} />

            <Route path="/student" element={<StudentManage />} />
            <Route path="/student/add" element={<CreateStudentForm />} />
            <Route path="/student/edit/:id" element={<CreateStudentForm />} />
            <Route path="/student/detail/:id" element={<ShowStudentDetail />} />

            <Route path="/my" element={<MyComponent />} />
            <Route path="/user" element={<Users />} />
          </Routes>
      );
    }
  export default RoutesAdmin