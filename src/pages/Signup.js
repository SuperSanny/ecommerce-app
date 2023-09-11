import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Signup = () => {
  return (
    <>
      <Meta title=" Create Account" />
      <BreadCrumb title=" Create Account" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card text-center">
              <h3>Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name"
                />
                <CustomInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
