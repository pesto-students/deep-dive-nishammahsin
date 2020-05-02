import './App.scss';
import React from 'react';

import { Modal } from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Modal
        size="medium"
        title={<h1>title</h1>}
        okText="YES"
        cancelText="Cancel"
        okButtonProps={{
          onClick: () => {
            console.log('clicked ok');
          },
        }}
        cancelButtonProps={{
          onClick: () => {
            console.log('clicked cancel');
          },
        }}
      >
        <p>modal body</p>
      </Modal>
    </div>
  );
}

export default App;
