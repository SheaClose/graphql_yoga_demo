import { gql } from "apollo-boost";
export default {};
export const GET_PRODUCTS = gql`
  query(
    $id: Int
    $img_url: String
    $gender: String
    $category: String
    $title: String
    $desc: String
    $price: Int
    $sale: Boolean
  ) {
    products(
      id: $id
      img_url: $img_url
      gender: $gender
      category: $category
      title: $title
      desc: $desc
      price: $price
      sale: $sale
    ) {
      id
      img_url
      gender
      category
      title
      desc
      price
      sale
    }
  }
`;
