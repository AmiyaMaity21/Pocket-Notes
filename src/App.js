import React, { useEffect, useState } from 'react'
import ProfileZone from "./component/ProfileZone/ProfileZone"
import DisplayZone from "./component/DisplayZone/DisplayZone"
import ChatZone from "./component/ChatZone/ChatZone"
import FormModal from "./component/FormModal/FormModal"
function App() {
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selectUser, setSelectUser] = useState([])
  useEffect(() => {
    const getFormData = localStorage.getItem('formData')
    setUserList(JSON.parse(getFormData)|| [])
  }, [])

  const openFormModal = () => {
    setFormModalOpen(true);
  };
  const closeFormModal = () => {
    setFormModalOpen(false);
  };
  function addUser(user) {
    const updatedUserList = [...userList, user];
    setUserList(updatedUserList);
    localStorage.setItem("formData", JSON.stringify(updatedUserList));
  };
  function handleStorage(userWithChat) {
    const manageStorage = userList.map((item) => {
      if (item.groupName === userWithChat.groupName) {
        return { ...item, ...userWithChat };
      }
      return item;
    })
    localStorage.setItem("formData", JSON.stringify(manageStorage));
  }

  return (
    <div style={{ display: "flex" }}>
      <ProfileZone
        showFormModal={openFormModal}
        userList={userList}
        setSelectUser={setSelectUser}
      />
      <FormModal
        isOpen={isFormModalOpen}
        onClose={closeFormModal}
        addUser={addUser}
      />
      {
        Object.keys(selectUser).length > 0 ? <ChatZone chat={selectUser}
          handleStorage={handleStorage}
        />
          : <DisplayZone />
      }
    </div>
  );
}

export default App;
