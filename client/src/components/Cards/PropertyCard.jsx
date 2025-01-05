import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Card, Rating } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

const Top = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const MenuItem = styled.div`
  background: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

const Details = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 14px;
  color: gray;
`;

const Location = styled.p`
  font-size: 14px;
  color: gray;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Top>
        <Image src={property?.img} />
        <Menu>
          <MenuItem>
            <FavoriteBorder sx={{ fontSize: "20px" }} />
          </MenuItem>
        </Menu>
      <Details onClick={() => navigate(`/properties/${property?._id}`)}>
        <Title>{property?.title }</Title>
        <Desc>{property?.description }</Desc>
        <Location>{property?.location }</Location>
        <Price>
          {property?.price?.org}
          <strike>
            ${property?.price?.mrp}
          </strike>
          <percent>
            ${property?.price?.off}%Off
          </percent>
        </Price>
      </Details>
      </Top>
    </Card>
  );
};

export default PropertyCard;