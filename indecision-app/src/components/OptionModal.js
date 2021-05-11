import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');
/**
 * Modal window for random Option.
 */
const OptionModal = (props) => (
  <Modal
    isOpen={ !!props.selectedOption }
    onRequestClose={ props.handleClearSelectedOption }
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    { props.selectedOption && <p>{ props.selectedOption }</p> }
    <button onClick={ props.handleClearSelectedOption }>
      Got It
    </button>
  </Modal>
);

export default OptionModal;
