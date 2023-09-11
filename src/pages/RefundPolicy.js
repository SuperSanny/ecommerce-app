import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const RefundPolicy = () => {
  return (
    <>
      <Meta title=" Refund Policy" />
      <BreadCrumb title=" Refund Policy" />
      <Container class1="refund-policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="refund-policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
