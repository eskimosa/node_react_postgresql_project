import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import ModalForm from "./components/ModalForm";
import Tablelist from "./components/Tablelist";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const hadleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
    }
    setIsOpen(false);
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Tablelist onOpen={() => handleOpen('edit')} />
      <ModalForm
        isOpen={isOpen}
        onSubmit={hadleSubmit}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
      />
    </>
  );
}

export default App;
