import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Modal = () => {
    return (
        <div className="modal-wrap">
            <div className="modal">
                test modal
            </div>
        </div>
    )
}

Modal.propTypes = {
    prop: PropTypes
}

export {Modal}
