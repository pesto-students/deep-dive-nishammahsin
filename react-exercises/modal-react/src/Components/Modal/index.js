import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Modal = () => {
  return (
    <React.Fragment>
      <div className="modal-wrap">
        <div className="modal-mask"></div>
        <div className="modal">test modal</div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  prop: PropTypes,
};

export { Modal };
