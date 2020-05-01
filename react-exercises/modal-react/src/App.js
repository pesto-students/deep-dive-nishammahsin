import './App.scss';
import React from 'react';

import { Modal } from './Components/Modal';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
      <Modal
        header={<div>'header'</div>}
        body={<div>body</div>}
        footer={<div>foot</div>}
      >
        <div> test </div>
      </Modal>
    </div>
  );
}

export default App;
