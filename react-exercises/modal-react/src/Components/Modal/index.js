import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = (props) => {
  const ModalBody = () =>
    React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        className: 'modal-body',
      });
    });

  return (
    <React.Fragment>
      <div className="modal-wrap">
        <div className="modal-mask"></div>
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">{props.header}</div>
              <ModalBody></ModalBody>
              <div className="modal-footer">{props.footer}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  footer: PropTypes.element.isRequired,
};

export { Modal };
