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

  const ModalHeader = () =>
    props.title ? <div className="modal-header">{props.title}</div> : null;

  const CloseButton = () =>
    props.closable ? <button className="modal-close">X</button> : null;

  return (
    <React.Fragment>
      <div className="modal-wrap">
        <div className="modal-mask"></div>
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              {<CloseButton></CloseButton>}
              {<ModalHeader></ModalHeader>}
              <ModalBody></ModalBody>
              <div className="modal-footer">{props.footer}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  closable: true,
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  body: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  footer: PropTypes.element.isRequired,
  closable: PropTypes.bool,
};

export { Modal };
