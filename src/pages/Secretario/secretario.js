import React, { useState } from "react";
import Modal from "react-modal";
import MemberForm from "../../Components/MemberForm/MemberForm";
import "./index.secretario.css";

Modal.setAppElement("#root");

const membersPerPage = 5;

const Members = () => {
  
  const [members, setMembers] = useState([
    { id: 1, name: "João", address: "Rua A", phone: "1234-5678", email: "joao@teste.com" },
    { id: 2, name: "Maria", address: "Rua B", phone: "9876-5432", email: "maria@teste.com" },
    { id: 3, name: "José", address: "Rua C", phone: "5678-1234", email: "jose@teste.com" },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const saveMember = (member) => {
    if (selectedMember) {
      // edit existing member
      const updatedMembers = members.map((m) =>
        m.id === selectedMember.id ? member : m
      );
      setMembers(updatedMembers);
      setSelectedMember(null);
    } else {
      // add new member
      const newMember = {
        ...member,
        id: Date.now().toString(),
      };
      setMembers([...members, newMember]);
    }
    closeEditModal();
  };
  
  const openEditModal = (id) => {
    const member = members.find((member) => member.id === id);
    setSelectedMember(member);
    setEditModalIsOpen(true);
  };
  
  const closeEditModal = () => {
    setSelectedMember(null);
    setEditModalIsOpen(false);
  };
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

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const totalPages = Math.ceil(members.length / membersPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <li key={number}>
        <button className="page-link" onClick={() => handleClick(number)}>
          {number}
        </button>
      </li>
    ));
  };

  return (
    <>
      <main className="main-ficha">
        
        <h1>Lista de Membros</h1>
        <button className="Btn-ficha" onClick={openModal}>
          Adicionar Membro
        </button>
        <table className="table-members">
          <thead>
            <tr>
              <th className="table-header">Nome</th>
              <th className="table-header">Endereço</th>
              <th className="table-header">Número</th>
              <th className="table-header">Email</th>
            </tr>
          </thead>
          <tbody>
  {currentMembers.map((member) => (
    <tr key={member.id}>
      <td>{member.name}</td>
      <td>{member.address}</td>
      <td>{member.phone}</td>
      <td>{member.email}</td>
      <td>
        <button
          className="Btn-ficha"
          onClick={() => removeMember(member.id)}
        >
          Excluir
        </button>
        <button
          className="Btn-ficha"
          onClick={() => openEditModal(member.id)}
        >
          Editar
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
        <div className="pagination">
          <ul className="pagination-list">{renderPageNumbers()}</ul>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <MemberForm addMember={addMember} closeModal={closeModal} />
        </Modal>
        <Modal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
         {selectedMember && (
       <MemberForm
      member={selectedMember}
      closeModal={closeEditModal}
      saveMember={saveMember}
    />
  )}
</Modal>

      </main>
    </>
  );
};

export default Members;