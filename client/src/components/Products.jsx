import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";


//following the same approach as that of the categories.jsx

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    //passing through the props
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />//key is used to identify each item in the array and for this data we are using id as the unique key
      ))}
    </Container>
  );
};

export default Products;
