import React, { useState } from "react";
import Modal from "react-modal";
import MemberForm from '../MemberForm/MemberForm'
import '../Ficha/index.Ficha.css'
Modal.setAppElement("#root");

const membersData = [
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
  { id: 3, name: "José" },
];

const Members = () => {
  const [members, setMembers] = useState(membersData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addMember = (member) => {
    setMembers([...members, member]);
    closeModal();
  };

  const removeMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <main className="main-ficha">
      <h1 >Lista de Membros</h1>
      <button onClick={openModal}>Adicionar Membro</button>
      <table class="table-members">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Estado Civil</th>
            <th>Gênero</th>
            <th>Endereço</th>
            <th>Numero</th>
            <th>Email</th>
            <th>Ativo?</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
  {members.map((member) => (
    <tr key={member.id}>
      <td>{member.name}</td>
      <td>{member.cpf}</td>
      <td>{member.birthDate}</td>
      <td>{member.maritalStatus}</td>
      <td>{member.gender}</td>
      <td>{member.address}</td>
      <td>{member.phone}</td>
      <td>{member.email}</td>
      <td>{member.observation}</td>
      <td>{member.isActive ? 'Sim' : 'Não'}</td>
      <td>
        <button onClick={() => removeMember(member.id)}>Excluir</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <MemberForm addMember={addMember} closeModal={closeModal} />
      </Modal>
      </main>
    </>
  );
};

export default Members;
