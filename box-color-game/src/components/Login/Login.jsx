import React, { useState, useRouter } from "react";

import { useParams, useLocation, useHistory, Redirect } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
} from "reactstrap";

const Login = () => {
  const router = useHistory();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const copyOfUserInfo = { ...userInfo };
    copyOfUserInfo[e.target.name] = e.target.value;
    setUserInfo(copyOfUserInfo);
  };

  const loginBtnHandler = () => {
    if (isUserInfoValid()) {
      setError(false);
      if (userInfo.username === "abcd" && userInfo.password === "abcd") {
        router.push("/configuration");
      }
      return false;
    }
    setError(true);
  };

  const isUserInfoValid = () => {
    return userInfo.username !== "" && userInfo.password !== "";
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardBody>
          <form>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
            />
            <br />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
            />
            <br />
            <div>
              <Button
                color="primary"
                style={{ width: "100%" }}
                onClick={loginBtnHandler}
              >
                Login
              </Button>
            </div>
            {error && (
              <div style={{ color: "red" }}>
                Please enter both username and password.
              </div>
            )}
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
