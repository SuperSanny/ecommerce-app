import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row text-white">
            <div className="col-4">
              <h4 className="mb-4">Contact Us</h4>
              <div className="text-white">
                <address className="fs-6">
                  Hno: 115 Near Teacher's Colony,
                  <br />
                  Kormangla, Bengaluru <br /> Pincode: 560034
                </address>
                <Link
                  to="tel: +91-98547985665"
                  className="mt-3 d-block mb-3 text-white"
                >
                  +91-79874546520
                </Link>
                <Link
                  to="mailto:a2zbazar@gmail.com"
                  className="mt-3 d-block mb-3 text-white"
                >
                  a2zbazar@gmail.com
                </Link>
                <div className="social_icons mt-4 d-flex align-items-center gap-30">
                  <Link to="" className="text-white" alt="Linkdedin">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="Instagram">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="GitHub">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="Youtube">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="py-2 mb-1 text-white">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="py-2 mb-1 text-white">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="py-2 mb-1 text-white">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="py-2 mb-1 text-white"
                >
                  Terms Of Service
                </Link>
                <Link to="/blogs" className="py-2 mb-1 text-white">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="py-2 mb-1 text-white">About Us</Link>
                <Link className="py-2 mb-1 text-white">Faq</Link>
                <Link className="py-2 mb-1 text-white">Contact</Link>
                <Link className="py-2 mb-1 text-white">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="py-2 mb-1 text-white">Laptops</Link>
                <Link className="py-2 mb-1 text-white">Headphones</Link>
                <Link className="py-2 mb-1 text-white">Tablets</Link>
                <Link className="py-2 mb-1 text-white">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} Powered by SuperSanny
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
