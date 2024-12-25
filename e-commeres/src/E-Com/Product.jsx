import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res);
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return <h1>Loding</h1>;
  }

  return (
    <>
      <div className="container" style={{ display: "flex" }}>
        <div className="right-column" style={{ width: "50%" }}>
          <div className="product-description">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
                {product.category}
              </span>
              <p className="reslese-date" style={{ marginBottom: "2rem" }}>
                <h6>
                  Listed:
                  <span>
                    <i>{new Date(product.releaseDate).toLocaleDateString()}</i>
                  </span>
                </h6>
              </p>
            </div>
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "0.5rem",
                textTransform: "capitalize",
                letterSpacing: "1px",
              }}
            >
              {product.name}
            </h1>
            <i style={{ marginBottom: "3rem" }}>{product.brand}</i>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                margin: "10px 0px 0px",
              }}
            >
              {" "}
              Product Description:
            </p>
            <p style={{ marginBottom: "1rem" }}>{product.description}</p>
          </div>
          <hr />

          <div className="product-price">
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {"Rs." + product.price}
            </span>
            <br />
            <button
              className={`cart-btn ${
                !product.productAvailable ? "disabled-btn" : ""
              }`}
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              {product.productAvailable ? "Add-cart" : "Out of Stock"}
            </button>
            <h6>
              Stock Available :<i>{product.stockQuantity}</i>
            </h6>
            <div
              className="update-btn"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                className="btn btn-dark"
                type="button"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  display: "flex",
                  // backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                Update
              </button>

              <button
                className="btn btn-danger"
                type="button"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  display: "flex",
                  // backgroundColor: "#dc3545",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
