import React from "react";
import "./App.scss";
import { Modal } from "./Components/Modal";

function App() {
  return (
    <div className="App">
      <Modal
        header={<div>'header'</div>}
        body={<div>body</div>}
        footer={<div>foot</div>}
      >
        <div> test</div>
      </Modal>
    </div>
  );
}

export default App;
