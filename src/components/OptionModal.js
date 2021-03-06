import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
            onRequestClose={props.deleteSelectedOption}
        >
            <h3 className="modal__title">Selected option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.deleteSelectedOption}>Okay</button>
        </Modal>
    );


export default OptionModal;