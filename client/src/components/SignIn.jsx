import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import TextButton from "./TextButton"; // Ensure this path is correct

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

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
`;

const SignIn = () => {
  return (
    <Container>
      <div>
        <Title>Welcome to Airbnb</Title>
        <Span>Please Login with your details here</Span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextInput label="email" placeholder="Enter your Email" />
        <TextInput label="password" placeholder="Enter your Password" password />
        <TextButton>Forgot Password?</TextButton>
        <Button text="Sign In" />
      </div>
    </Container>
  );
};

export default SignIn;
