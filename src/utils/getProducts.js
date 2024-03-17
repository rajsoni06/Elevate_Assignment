import { fetchProducts } from "../service";

export const getProducts = async (setProducts) => {
  try {
    let products = await fetchProducts();
    if (products.status === 200) setProducts(products.data);
  } catch (err) {
    console.log(err);
  }
};
