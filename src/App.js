import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import StudentLogin from './components/students/Student_login';
import StudentSignUp from './components/students/Student_signUp';
import StudentEdit from './components/students/StudentEdit';
import StudentQuery from './components/students/StudentQuery';
import TeacherLogin from './components/teacher/TeacherLogin';
import TeacherSignup from './components/teacher/TeacherSignup';
import TeacherEdit from './components/teacher/TeacherEdit';
import TeacherQuery from './components/teacher/TeacherQuery';
import StudentAccount from './components/students/StudentAccount';
import TeacherAccount from './components/teacher/TeacherAccount';
import Admin from './components/admin/Admin';
import Home from './components/Home';
import Auth from './components/Auth';
import Admin_home from './components/admin/admin_home';
import About from './components/component/about';
import Contactus from './components/component/contact';
import Fee from './components/component/fee';
import Courses from './components/component/courses';
import StudentPosts from './components/students/studentPosts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/> } />
      {/* <Route path="*" element={<Home/> } /> */}
      <Route path="/admin" element={<Admin/> } />
      <Route path="/studentlogin" element={<StudentLogin/> } />
      <Route path="/studentsignup" element={<StudentSignUp/> } />
      <Route path="/studentaccount/:id" element={<Auth><StudentAccount/></Auth> } />
      <Route path="/studentEdit" element={<Auth><StudentEdit/></Auth> } />
      <Route path="/studentquery" element={<Auth><StudentQuery/></Auth> } />
      <Route path="/studentposts" element={<Auth><StudentPosts/></Auth> } />
      <Route path="/teacherlogin" element={<TeacherLogin/> } />
      <Route path="/teachersignup" element={<TeacherSignup/> } />
      <Route path="/teacherEdit" element={<TeacherEdit/> } />
      <Route path="/teacherquery" element={<TeacherQuery/> } />
      <Route path="/teacherAccount" element={<Auth><TeacherAccount/></Auth> } />
      <Route path="/adminHome" element={<Auth><Admin_home/></Auth> } />
      <Route path="/about" element={<About/> } />
      <Route path="/contactus" element={<Contactus/> } />
      <Route path="/fee" element={<Fee/> } />
      <Route path="/courses" element={<Courses/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
