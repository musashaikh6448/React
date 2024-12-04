import axios from "axios";
import { useEffect, useState } from "react";

const Fetch2 = () => {
  const [data, setData] = useState([
    {
      "id": "",
      "title": "",
      "price": 0,
      "description": "",
      "category": "",
      "image": "",
      "rating": {
        "rate": "",
        "count": 0
      }
    }
  ])

  let [category, setCategory] = useState([])
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setData(json); // Wrap the fetched object in an array to keep data consistent
    //   })


      axios .get("https://fakestoreapi.com/products")
      .then((response) =>{
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        });


      axios .get("https://fakestoreapi.com/products/categories")
      .then((response) =>{
       setCategory(response.data)
      })
      .catch((err) => {
        console.error(err);
        });
    
  }, []);

  return (
    <div>
      {data.map((obj) => {
        return (
          <div key={obj.id}>
            <h2>Title: {obj.title}</h2>
            <p>Description: {obj.description}</p>
            <p>Price: ${obj.price}</p>
            <img src={obj.image} alt={obj.title} height="180px" width="200px" />
          </div>
        );
      })}

      {category.map((ele)=>{
        return <p key={ele}>{ele}</p>
      })}
    </div>
  );
};

export default Fetch2;
