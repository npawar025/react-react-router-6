import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  const { image, name } = product;
  
  return (
    <section className="section product">
      <img src={image} alt={name} />{" "}
      {/* images url is not working change the url in data.js*/}
      <h5>{name}</h5>
      <Link to="/product">Back to product</Link>
    </section>
  );
};

export default SingleProduct;
