import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.6843328003!2d77.62522305420222!3d12.910257643548317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694179710874!5m2!1sen!2sin"
              style={{ width: 600, height: 450 }}
              title="A google map for location"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <CustomInput
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <CustomInput
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />

                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno: 115 Near Teacher's Colony, Kormangla, Bengaluru
                        Pincode: 560034
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <Link to="tel: +91-98547985665" className="">
                        +91-79874546520
                      </Link>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <Link to="mailto:a2zbazar@gmail.com" className="">
                        a2zbazar@gmail.com
                      </Link>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
