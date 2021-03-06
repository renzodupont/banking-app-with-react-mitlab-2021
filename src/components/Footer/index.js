import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";

const Footer = () => {
  const context = useContext(UserContext);

  return (
    <>
      {context.loggedInUser !== null && (
        <Link
          className="btn logout"
          exact="true"
          to="/"
          onClick={() => {
            context.loggedInUser = null;
          }}
        >
          Logout
        </Link>
      )}
    </>
  );
};

export default Footer;
