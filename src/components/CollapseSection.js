import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const CollapseSection = ({ title, content }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <>
      <div className="d-flex gap-10 flex-column border-bottom my-4">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="product-heading ">{title}</h4>
          <button className="bg-transparent border-0" onClick={toggleCollapse}>
            {isCollapsed ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
          </button>
        </div>
        {!isCollapsed && <p className="product-data ps-2 py-2">{content}</p>}
      </div>
    </>
  );
};

export default CollapseSection;
