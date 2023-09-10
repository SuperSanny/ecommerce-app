import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const RefundPolicy = () => {
  return (
    <>
      <Meta title=" Refund Policy" />
      <BreadCrumb title=" Refund Policy" />
      <section className="refund-policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="refund-policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
