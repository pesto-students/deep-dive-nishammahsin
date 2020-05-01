import './App.scss';
import React from 'react';

import { Modal } from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Modal title={<h1>title</h1>} okText="ok" cancelText={'cancel'}>
        <p>modal body</p>
      </Modal>
    </div>
  );
}

export default App;
