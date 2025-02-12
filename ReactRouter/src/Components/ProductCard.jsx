import { Link } from "react-router-dom";
import { produts } from "../common/productData";

const ProductCards = () => {
  return (
    <>
      <h1 className="text-center my-5">Our Core Products</h1>
      <div className="card-container">
        {produts.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.img} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-success">{product.price}</p>
                <Link to="/" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCards;