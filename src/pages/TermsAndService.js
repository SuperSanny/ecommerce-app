import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const TermsAndService = () => {
  return (
    <>
      <Meta title=" Terms Of Service" />
      <BreadCrumb title=" Terms Of Service" />
      <section className="termsandservice-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="terms-and-service"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndService;
