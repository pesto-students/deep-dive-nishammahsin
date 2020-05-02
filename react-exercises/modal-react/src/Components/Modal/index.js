import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MODAL_DEFAULT_WIDTH,
  MODAL_DEFAULT_SIZE,
  OK_TEXT,
  CANCEL_TEXT,
  MODAL_SIZES,
} from './constants';
import './styles.scss';

const Modal = (props) => {
  const {
    width,
    styles,
    title,
    footer,
    closable,
    okButtonProps,
    cancelButtonProps,
    okText,
    cancelText,
    size,
    visible,
  } = props;

  const [visible, setVisible] = useState(visible);

  const onClose = () => {
    setVisible(false);
  };

  const ModalBody = () => <div className="modal-body">{props.children}</div>;

  const ModalHeader = () =>
    title ? <div className="modal-header">{title}</div> : null;

  const CloseButton = () =>
    closable ? (
      <button className="modal-close" onClick={onClose}>
        X
      </button>
    ) : null;

  const ModalFooter = () =>
    footer ? (
      footer
    ) : (
      <div className="modal-footer">
        <button {...okButtonProps}>{okText}</button>
        <button {...cancelButtonProps}>{cancelText}</button>
      </div>
    );

  const modalSize = MODAL_SIZES.includes(size) ? size : '';

  const stylesheet = { ...styles, width };

  return (
    <React.Fragment>
      <div className="modal-wrap">
        <div className="modal-mask"></div>
        <div className="modal">
          <div className="modal-dialog">
            <div className={`modal-content ${modalSize}`} style={stylesheet}>
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
  okText: OK_TEXT,
  cancelText: CANCEL_TEXT,
  size: MODAL_DEFAULT_SIZE,
  width: MODAL_DEFAULT_WIDTH,
  styles: {},
  visible: false,
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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export { Modal };
