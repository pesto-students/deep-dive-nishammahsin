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

/**
 * Modal component
 * @component
 */
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
  } = props;

  const [visible, setVisible] = useState(props.visible);

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
      {visible ? (
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
      ) : null}
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
  /**
   * The modal dialog's title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Footer content, ReactNode set as footer={null} when you don't need default buttons
   */
  footer: PropTypes.element,
  /**
   * Whether a close (x) button is visible on top right of the modal dialog or not
   */
  closable: PropTypes.bool,
  /**
   * Text of the OK button. default 'OK'
   */
  okText: PropTypes.string,
  /**
   * Text of the Cancel Button. default 'CANCEL'
   */
  cancelText: PropTypes.string,
  /**
   * OK button props
   */
  okButtonProps: PropTypes.object,
  /**
   * Cancel button props
   */
  cancelButtonProps: PropTypes.object,
  /**
   * Size of the modal .small | medium | large default is medium
   */
  size: PropTypes.oneOf(MODAL_SIZES),
  /**
   * width of the modal
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * styles of the modal
   */
  styles: PropTypes.object,
  /**
   * Whether the modal dialog is visible or not
   */
  visible: PropTypes.bool,
  /**
   * Specify a function that will be called when a user clicks mask, close button on top right or Cancel button
   */
  onClose: PropTypes.func,
};

export { Modal };
