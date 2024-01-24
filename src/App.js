import React, {useState} from 'react'
import NotesZone from "./component/NotesZone/NotesZone"
import DisplayZone from "./component/DisplayZone/DisplayZone"
import ChatZone from "./component/ChatZone/ChatZone"
import FormModal from "./component/FormModal/FormModal"
function App() {
  const [isFormModalOpen, setFormModalOpen] = useState(false);

  const openFormModal = () => {
    setFormModalOpen(true);
  };
  const closeFormModal = () => {
    setFormModalOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <NotesZone 
      showFormModal={openFormModal}
      />
      <DisplayZone />
      <FormModal 
       isOpen={isFormModalOpen} 
       onClose={closeFormModal}
       />
      {/* <ChatZone /> */}
    </div>
  );
}

export default App;
