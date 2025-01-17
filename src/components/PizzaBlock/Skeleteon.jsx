import React from "react";
import ContentLoader from "react-content-loader";

const Skeleteon = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="131" cy="121" r="121" />
    <rect x="-3" y="257" rx="0" ry="0" width="280" height="31" />
    <rect x="1" y="301" rx="0" ry="0" width="276" height="101" />
    <rect x="2" y="422" rx="0" ry="0" width="89" height="34" />
    <rect x="151" y="415" rx="0" ry="0" width="141" height="42" />
  </ContentLoader>
);

export default Skeleteon;
