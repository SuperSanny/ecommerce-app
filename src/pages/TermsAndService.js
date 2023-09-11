import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const TermsAndService = () => {
  return (
    <>
      <Meta title=" Terms Of Service" />
      <BreadCrumb title=" Terms Of Service" />
      <Container class1="termsandservice-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="terms-and-service"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndService;
