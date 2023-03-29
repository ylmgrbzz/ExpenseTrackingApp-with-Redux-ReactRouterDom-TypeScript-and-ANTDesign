import React from "react";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import Login from "./components/Login";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Route path="/login" component={Login} />
        <PrivateRoute path="/categories" component={Categories} />
        <PrivateRoute path="/records" component={Records} /> */}
      </Content>
      <Footer style={{ textAlign: "center" }}>Yalım Gürbüz</Footer>
    </Layout>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/register" element={<SignUp />} />
</Routes>; */
}
