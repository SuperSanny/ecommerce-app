import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title=" Dynamic Blog Name" />
      <BreadCrumb title=" Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <div className="col-12 mb-3">
              <div className="single-blog-card">
                <h3 className="title"> Dynamic Blog Name</h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4 rounded-1"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aperiam iusto similique repudiandae sequi quam
                  necessitatibus, aliquam ab minus libero maiores dolore commodi
                  magni recusandae beatae aut enim excepturi nam.
                </p>
                <p>11 Jun, 2022 User Name</p>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Link
                      to="/blogs"
                      className="d-flex align-items-center gap-10"
                    >
                      <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                    </Link>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaPinterest />
                  </div>
                </div>
                <hr />
                <div className="comment-card">
                  <h5 className="title">Leave A Comment</h5>
                  <div>
                    <form action="" className="d-flex flex-column gap-15">
                      <div className="row">
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name *"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comment *"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0 mt-2">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
