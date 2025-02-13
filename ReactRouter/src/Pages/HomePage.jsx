import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ProductCards from "../Components/ProductCard";

const HomePage = () => {
  const navigate = useNavigate();

  const hanldeSubmit = () => {

    toast.success("going  to About Page..." )
    

    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };

  return (
    <>
      <div className="slider-container"></div>
      <button className="btn btn-primary my-5" onClick={hanldeSubmit}>
        Go to About Page
      </button>
      <ProductCards />
      <ToastContainer />
    </>
  );
};

export default HomePage;
