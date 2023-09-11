import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Resetpassword = () => {
  return (
    <>
      <Meta title=" Reset Password" />
      <BreadCrumb title=" Reset Password" />
      <Container class1="reset-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card text-center">
              <h3>Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="confirm-password"
                  id=""
                  placeholder="Confirm Password"
                  className="form-control"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Ok
                    </button>
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

export default Resetpassword;
