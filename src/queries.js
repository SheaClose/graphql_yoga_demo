import { gql } from "apollo-boost";
export const ADD_TO_CART = gql`
  mutation AddToCart($id: Int) {
    addToCart(id: $id) {
      id
      product_id
      user_id
      quantity
    }
  }
`;
export const GET_PRODUCTS = gql`
  query(
    $id: Int
    $img_url: String
    $gender: String
    $category: String
    $name: String
    $desc: String
    $price: Int
    $sale: Boolean
  ) {
    products(
      id: $id
      img_url: $img_url
      gender: $gender
      category: $category
      name: $name
      desc: $desc
      price: $price
      sale: $sale
    ) {
      id
      img_url
      gender
      category
      name
      desc
      price
      sale
    }
  }
`;
