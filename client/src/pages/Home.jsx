import { SearchRounded } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 50px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

const SearchContainer = styled.div`
  border-radius: 33px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  max-width: 900px;
  gap: 20px;
  font-size: 14px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding: 10px;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const CheckInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [Location,setLocation] = useState("");
  const [CheckIn,setCheckIn] = useState("");
  const [CheckOut,setCheckOut] = useState("");
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/properties",{
      state:{
        Location,
        CheckIn,
        CheckOut
      }
    });
  }
  return (
   <Container>
    <SearchContainer>
      <LocationWrapper>
        <Title>Location</Title>
        <SearchInput placeholder="Where are you going ?" type="text" value={Location} onChange={(e) => setLocation(e.target.value)}/>
      </LocationWrapper>

      <CheckInWrapper>
        <Title>Check in Date</Title>
        <SearchInput placeholder="Start date" type="date" value={CheckIn} onChange={(e) => setCheckIn(e.target.value)}/>
      </CheckInWrapper>

      <CheckOutWrapper>
        <Title>Check Out Date</Title>
        <SearchInput placeholder="End date" type="date" value={CheckOut} onChange={(e) => setCheckOut(e.target.value)}/>
      </CheckOutWrapper>

      <SearchWrapper> 
        <SearchButton onClick={handleSearchClick}>
          <SearchRounded sx={{color:"inherit",fontSize:"30px"}}/>
        </SearchButton>
      </SearchWrapper>
    </SearchContainer>
   </Container>
  );
  
};

export default Home