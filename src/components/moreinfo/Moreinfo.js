import React from "react";
import { Link } from "react-router-dom";
import styles from "./Moreinfo.module.css";

const MoreInfo = ({ details, location }) => (
  <div>
    <p>Additinal information</p>
    <ul className={styles.moreInfo}>
      <li>
        <Link
          to={{
            pathname: `/movies/${details.id}/cast`,
            state: { ...location }
          }}
        >
          Cast
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: `/movies/${details.id}/reviews`,
            state: { ...location }
          }}
        >
          Rewiews
        </Link>
      </li>
    </ul>
  </div>
);

export default MoreInfo;
