import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">A2Z Bazzar</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/" className="text-dark total-price">
                      Information
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to="/" className="text-dark total-price">
                      Shipping
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to="/" className="text-dark total-price">
                      Payment
                    </Link>
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">Sanny Kumar (sanny123@gmail.com)</p>
              <h4 className="mb-3 total-price">Shipping address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name=""
                    id=""
                    defaultValue={"select"}
                    className="form-control form-select"
                  >
                    <option value="select" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="First Name"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name=""
                    placeholder="Last Name"
                    id=""
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    placeholder="Address"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="City" name="" id="" />
                </div>
                <div className="flex-grow-1">
                  <select
                    name=""
                    id=""
                    defaultValue={"select"}
                    className="form-control form-select"
                  >
                    <option value="select" disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div>
                  <CustomInput
                    type="text"
                    placeholder="ZIP Code"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <FaArrowLeft className="fs-5 me-1" />
                      Return to Cart
                    </Link>
                    <Link to="" className="button bg-danger">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "-5px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      src="/images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <h6 className="total">Honor t1 7.0 1 GB RAM</h6>
                    <p className="total-price">S / #BSDED</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h4 className="fs-5 total">$ 100</h4>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">SubTotal</p>
                <p className="total-price">$ 100</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 100</p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 100</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
