import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MODAL_SIZES = ['small', 'medium', 'large'];

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

  const ModalFooter = () =>
    props.footer ? (
      props.footer
    ) : (
      <div className="modal-footer">
        <button {...props.okButtonProps}>{props.okText}</button>
        <button {...props.cancelButtonProps}>{props.cancelText}</button>
      </div>
    );

  const modalSize = MODAL_SIZES.includes(props.size) ? props.size : '';

  return (
    <React.Fragment>
      <div className="modal-wrap">
        <div className="modal-mask"></div>
        <div className="modal">
          <div className="modal-dialog">
            <div className={`modal-content ${modalSize}`}>
              <CloseButton></CloseButton>
              <ModalHeader></ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter></ModalFooter>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  closable: true,
  okText: 'OK',
  cancelText: 'Cancel',
  size: 'medium',
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  body: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  footer: PropTypes.element,
  closable: PropTypes.bool,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  okButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
  size: PropTypes.oneOf(MODAL_SIZES),
};

export { Modal };
