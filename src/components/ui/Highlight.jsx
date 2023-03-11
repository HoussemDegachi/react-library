import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Highlight({logo , title , para}) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={logo} />
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
}

export default Highlight;
