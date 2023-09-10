import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Color from "../components/Color";
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import {
  LiaShippingFastSolid,
  LiaShareSolid,
  LiaPencilRulerSolid,
  LiaViharaSolid,
} from "react-icons/lia";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  console.log(setOrderProduct);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title=" Dynamic Product name" />
      <BreadCrumb title=" Dynamic Product name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row main-product-card">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "/images/headphone.jpg",
                      },
                      style: {
                        padding: "1px",
                      },
                      largeImage: {
                        src: "/images/headphone.jpg",
                        width: 1000,
                        height: 1000,
                      },
                      enlargedImagePosition: "over",
                    }}
                  />
                </div>
              </div>
              <div className="other-product-images mt-3 d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="/images/headphone.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="/images/headphone.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Dynamic Product Name</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <div>
                    <a href="#reviews" className="review-btn">
                      Write a Review
                    </a>
                  </div>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">Type: </h4>
                    <p className="product-data">Headphone</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">Brand: </h4>
                    <p className="product-data">JBL</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">Categories: </h4>
                    <p className="product-data">AirPods, Camera, SmartTV</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">Tags: </h4>
                    <p className="product-data">
                      Headphones, Laptop, Mobile, Oppo
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">SKU: </h4>
                    <p className="product-data">SKU025</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">Avalilability: </h4>
                    <p className="product-data">541 In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h4 className="product-heading">Size: </h4>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h4 className="product-heading">Color: </h4>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h4 className="product-heading">Quantity: </h4>
                    <div>
                      <input
                        type="number"
                        name=""
                        id=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-4">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup">But It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <Link>
                        <FaCodeCompare className="fs-5 me-2" /> Add to Compare
                      </Link>
                    </div>
                    <div>
                      <Link>
                        <FaRegHeart className="fs-5 me-2" /> Add to Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom my-4 my-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="product-heading">
                        <LiaShippingFastSolid className="fs-5 me-2" /> Shipping
                        & Returns{" "}
                      </h4>
                      <RiArrowUpSLine />
                    </div>
                    <p className="product-data ps-2 py-2">
                      Free shipping and returns available on all orders! <br />{" "}
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom my-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="product-heading">
                        <LiaViharaSolid className="fs-5 me-2" /> Materials{" "}
                      </h4>
                      <RiArrowDownSLine />
                    </div>
                    <p className="product-data ps-2 py-2">
                      Running Shoes cushions your stride With sott foam to keep
                      vou running in comfort. Leghtweight Knit material <br />{" "}
                      wraps foot in breathable support. while a minimalist
                      design fits in lust about Vour day takes you.
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom my-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="product-heading">
                        <LiaPencilRulerSolid className="fs-5 me-2" /> Dimensions{" "}
                      </h4>
                      <RiArrowDownSLine />
                    </div>
                    <p className="product-data ps-2 py-2">350 x 450 cm.</p>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom my-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="product-heading">
                        <FaRegHeart className="fs-5 me-2" /> Care Instructions{" "}
                      </h4>
                      <RiArrowDownSLine />
                    </div>
                    <p className="product-data ps-2 py-2">
                      Use a soft damp cloth and a drop of mid soap to remove any
                      haze. Air dry
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading">
                      <LiaShareSolid className="fs-5 me-2" /> Share{" "}
                    </h4>
                    <Link
                      to={"#"}
                      onClick={() => {
                        copyToClipboard(
                          "https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX"
                        );
                      }}
                    >
                      Copy Product Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white rounded-3 p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  incidunt accusamus, doloribus minima delectus nam, ducimus
                  ullam quia pariatur laudantium ab unde culpa fugit repellendus
                  vitae deserunt et ipsa commodi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="reviews">Reviews</h3>
              <div className="review-inner-wrapper rounded-3">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <Link
                        to=""
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form">
                  <form action="" className="d-flex flex-column gap-15">
                    <h5 className="title mt-3"> Write A Review</h5>
                    <div>
                      <label
                        htmlFor="customer-name"
                        className="form-review-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        id="customer-name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="customer-email"
                        className="form-review-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="example@example.com"
                        id="customer-email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="customer-rating"
                        className="form-review-label"
                      >
                        Rating
                      </label>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                        id="customer-rating"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="customer-review-title"
                        className="form-review-label"
                      >
                        Review Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="customer-review-title"
                        placeholder="Give your review a title"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="customer-comments"
                        className="form-review-label"
                      >
                        Body of Review (1500)
                      </label>
                      <textarea
                        name=""
                        id="customer-comments"
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="write your comments here..."
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="show-reviews mt-3">
                  <div className="mt-3">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <h6 className="review-title mt-1">Good</h6>
                  <div className="d-flex gap-10">
                    <i className="fw-bold">customer name</i>
                    <p>on</p>
                    <i className="fw-bold">Aug 29, 2023</i>
                  </div>
                  <p>Great Stuff, I Think I will get more orders</p>
                  <div className="d-flex justify-content-end">
                    <Link to="" className="text-decoration-underline report">
                      Report as Inappropriate
                    </Link>
                  </div>
                </div>
                <div className="show-reviews mt-3">
                  <div className="mt-3">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <h6 className="review-title mt-1">Good</h6>
                  <div className="d-flex gap-10">
                    <i className="fw-bold">customer name</i>
                    <p>on</p>
                    <i className="fw-bold">Aug 29, 2023</i>
                  </div>
                  <p>Great Stuff, I Think I will get more orders</p>
                  <div className="review-reply">
                    <h6>- A2Z Bazzar</h6>
                    <p>
                      Thank you for your purchase form. Please let us know if we
                      can do anything else for you!
                    </p>
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <Link to="" className="text-decoration-underline report">
                      Report as Inappropriate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
