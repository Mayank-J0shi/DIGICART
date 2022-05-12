import styled from "styled-components";
import { mobile } from "../responsive";
//object-fit means that the image will be scaled to fit the container
//if we just put flex : 1 and assume that all image will be of same size
//but for that we need to have size of one image to be same as the container
//object -fit is used to scale the image to fit the container
//object-position is used to position the image
//object-fit: cover is used to scale the image to cover the container
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

//every categoryItem is divided into 2 parts~ image and info
//info part is subdivided into title and button
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
