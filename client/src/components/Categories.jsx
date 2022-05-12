import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

//since these are categories so every child is a category item 
//so they are horizontal to each other
//justify-content is used to align the items horizontally
//align-items is used to align the items vertically but here there is no 
//use of align items we want the categories section to start from the top
//slider se chippak ke mtlab 
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    //map is used to iterate over the array 
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
