import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";
import { openSnackbar } from "../redux/reducers/snackbarSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
`;

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      // Make the API call to sign up the user
      const response = await UserSignUp({ fullName, password });
      dispatch(loginSuccess(response.data)); // Dispatch the success action with the user data
      dispatch(openSnackbar({ message: "Sign Up successful", severity: "success" })); // Show success message
    } catch (error) {
      dispatch(openSnackbar({ message: error.message || "Something went wrong", severity: "error" })); // Handle error
    }
  };

  return (
    <Container>
      <div>
        <Title>Welcome to Airbnb</Title>
        <Span>Please Sign Up with your details here</Span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextInput
          label="Full Name"
          placeholder="Enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your Password"
          value={password}
          password
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Sign Up" onClick={handleSignUp} />
      </div>
    </Container>
  );
};

export default SignUp;
