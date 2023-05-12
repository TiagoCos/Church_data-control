import React, { useState } from "react";
import Modal from "react-modal";
import MemberForm from "../../Components/MemberForm/MemberForm";
import './index.secretario.css'
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
      <button className="Btn-ficha" onClick={openModal}>Adicionar Membro</button>
      <table class="table-members">
        <thead>
          <tr >
          <th class="table-header">Nome</th>
          <th class="table-header">Civil</th>
          <th class="table-header">Gênero</th>
          <th class="table-header">Endereço</th>
          <th class="table-header">Numero</th>
          <th class="table-header">Email</th>
          <th class="table-header">Ativo?</th>
          <th class="table-header">Excluir</th>

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
        <button  className="Btn-ficha" onClick={() => removeMember(member.id)}>Excluir</button>
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
