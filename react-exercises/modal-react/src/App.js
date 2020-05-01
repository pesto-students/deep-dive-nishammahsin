import './App.scss';
import React from 'react';

import { Modal } from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Modal title={<h1>title</h1>} footer={<div>foot</div>}>
        <p>modal body</p>
      </Modal>
    </div>
  );
}

export default App;
