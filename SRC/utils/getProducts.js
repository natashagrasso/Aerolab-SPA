import getHash from "../utils/getHash";

const getProducts = (products) => {
  const id = getHash();
  const product = products.find((element) => element._id === id) || null;
  return product;
};

export default getProducts;