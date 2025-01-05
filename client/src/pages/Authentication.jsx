import React, { useState } from "react";
import styled from "styled-components";
import Background from "../utils/Images/Background.svg";
import { Close } from "@mui/icons-material";
import { Modal, Typography, Button } from "@mui/material";
import Signup from "../components/Signup";
import SignIn from "../components/SignIn";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-image: linear-gradient(rgba(249, 238, 238, 0.9), rgba(135, 132, 132, 0.8)),
    url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  color: white;
`;

const Authentication = ({ setOpenAuth }) => {
  const [login, setLogin] = useState(true); // True means login, False means sign up

  const handleClose = () => {
    console.log("Close clicked");
    setOpenAuth(false);
  };

  const handleLoginToggle = () => {
    console.log("Toggle login/signup");
    setLogin(!login);
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Container>
        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>

        {login ? (
          <>
            <SignIn setOpenAuth={setOpenAuth} />
            <Typography variant="h6" color="white" align="center">
              Don&apos;t have an account?{" "}
              <Button variant="text" onClick={handleLoginToggle} color="primary">
                Sign Up
              </Button>
            </Typography>
          </>
        ) : (
          <>
            <Signup setOpenAuth={setOpenAuth} />
            <Typography variant="h6" color="white" align="center">
              Already have an account?{" "}
              <Button variant="text" onClick={handleLoginToggle} color="primary">
                Sign In
              </Button>
            </Typography>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default Authentication;
