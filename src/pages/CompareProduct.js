import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
const CompareProduct = () => {
  return (
    <>
      <Meta title=" Compare Products" />
      <BreadCrumb title=" Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet Computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availablity:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color</h6>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h6>Size</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet Computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availablity:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color</h6>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h6>Size</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h6>Brand:</h6>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h6>Type:</h6>
                      <p>Tablet Computers</p>
                    </div>
                    <div className="product-detail">
                      <h6>SKU:</h6>
                      <p>SKU033</p>
                    </div>
                    <div className="product-detail">
                      <h6>Availablity:</h6>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6>Color</h6>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h6>Size</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
