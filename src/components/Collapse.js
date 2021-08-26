import { useState } from "react";
import React from "react";

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(!collapsed);

  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show more" : "Hide"} images
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        <br></br>
        {children}
      </div>
    </>
  );
};
export default Collapse;
