import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    category: "",
    releaseDate: "",
    productAvailable: false,
    stockQuantity: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    // console.log(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/product", product)
      .then((res) => alert("added"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container" onSubmit={onSubmit}>
      <form className="row g-3 pt-5">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Product-name"
            onChange={handleInputChange}
            value={product.name}
            name="name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Brand</label>
          <input
            className="form-control"
            type="text"
            placeholder="Brand-name"
            onChange={handleInputChange}
            value={product.brand}
            name="brand"
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            placeholder="Description"
            onChange={handleInputChange}
            value={product.description}
            name="description"
          />
        </div>
        <div className="col-5">
          <label className="form-label">
            <h6>Price</h6>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Eg: $1000"
            onChange={handleInputChange}
            value={product.price}
            name="price"
            id="price"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={product.category}
            onChange={handleInputChange}
            name="category"
            id="category"
          >
            <option value="">Select category</option>
            <option value="Laptop">Laptop</option>
            <option value="Headphone">Headphone</option>
            <option value="Mobile">Mobile</option>
            <option value="Electronics">Electronics</option>
            <option value="Toys">Toys</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">
            <h6>Stock Quantity</h6>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Stock Remaining"
            onChange={handleInputChange}
            value={product.stockQuantity}
            name="stockQuantity"
            // value={`${stockAlert}/${stockQuantity}`}
            id="stockQuantity"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">
            <h6>Release Date</h6>
          </label>
          <input
            type="date"
            className="form-control"
            value={product.releaseDate}
            name="releaseDate"
            onChange={handleInputChange}
            id="releaseDate"
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="productAvailable"
              id="gridCheck"
              checked={product.productAvailable}
              onChange={(e) =>
                setProduct({ ...product, productAvailable: e.target.checked })
              }
            />
            <label className="form-check-label">Product Available</label>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
