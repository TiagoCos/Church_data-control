import React, { useState } from 'react';
import Modal from 'react-modal';
import MemberForm from '../MemberForm/MemberForm';
Modal.setAppElement('#root');

const Members = () => {
  const [members, setMembers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddMember = (member) => {
    setMembers([...members, member]);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Lista de Membros</h1>
      <button onClick={() => setModalIsOpen(true)}>Adicionar Membro</button>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <MemberForm onSubmit={handleAddMember} />
      </Modal>
    </div>
  );
};

export default Members;
