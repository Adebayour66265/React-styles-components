import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import AccessCode from "./pages/auth/AccessCode";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Verify from "./pages/auth/Verify";
import Home from "./pages/Home/Home";
import PageMenu from "./pages/profile/PageMenu";
import Profile from "./pages/profile/Profile";



const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="login" element={
            <Login />
          } />
          <Route path="register" element={
            <Register />
          } />
          <Route path="forgot" element={
            <Forgot />
          } />
          <Route path="reset/:resetToken" element={
            <Reset />
          } />
          <Route path="access" element={
            <AccessCode />
          } />
          <Route path="verify/:verificationToken" element={
            <Layout>
              <Verify />
            </Layout>
          } />
          <Route path="profile" element={
            <Profile />

          } />
          <Route path="pagemenu" element={
            <PageMenu />

          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
