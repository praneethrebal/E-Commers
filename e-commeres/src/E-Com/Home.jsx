import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.log(error);
        setisError(true);
      });
  }, []);

  //   useEffect(
  //     const fetchdata= async()=>{
  //       try{
  //       const res = await axios.get("http://localhost:8080/products")
  //       setProducts(res.data)
  //     }
  //     catch(error)
  //     {
  // setisError(true)``
  //     }}
  //     fetchdata(),[]
  //   );

  if (isError) {
    return (
      <div className="text-center">
        <h1>Connection Lost</h1>
      </div>
    );
  }

  return (
    <>
      <div className="row m-5" style={{ display: "flex", gap: "30px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card mb-3"
            style={{
              width: "270px",
              height: "210px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <Link
              to={`product/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.parentElement.style.transform = "scale(1.05)";
                e.currentTarget.parentElement.style.boxShadow =
                  "0 8px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.parentElement.style.transform = "scale(1)";
                e.currentTarget.parentElement.style.boxShadow =
                  "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  // flexGrow: 1,
                  flexDirection: "column",
                  padding: "10px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5 className="card-title" style={{ margin: "0 0 10px 0" }}>
                    {product.name.toUpperCase()}
                  </h5>
                  <i className="card-brand" style={{ fontStyle: "italic" }}>
                    {"by " + product.brand}
                  </i>
                </div>
                <hr className="hr-line" style={{ margin: "10px 0" }} />
                <div className="home-cart-price">
                  <h5
                    className="card-text"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      marginBottom: "5px",
                    }}
                  >
                    <i className="bi bi-currency-rupee"></i>
                    {product.price}
                  </h5>
                </div>
                <button
                  className="btn-custom"
                  style={{ background: "#007bff", color: "white" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "green")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007bff")
                  }
                >
                  Add To Cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
