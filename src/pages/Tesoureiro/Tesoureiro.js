import React, { useState } from "react";
import Modal from "react-modal";
import ValueForm from "../../Components/ValueFormMoldal/ValueForm";
import "./index.Tesoureiro.css";

Modal.setAppElement("#root");

const valuesPerPage = 5;

const Tesoureiro = () => {
  const [values, setValues] = useState([
    { id: 1, description: "Valor 1", amount: 100 },
    { id: 2, description: "Valor 2", amount: 200 },
    { id: 3, description: "Valor 3", amount: 300 },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const saveValue = (value) => {
    if (selectedValue) {
      // edit existing value
      const updatedValues = values.map((v) =>
        v.id === selectedValue.id ? value : v
      );
      setValues(updatedValues);
      setSelectedValue(null);
    } else {
      // add new value
      const newValue = {
        ...value,
        id: Date.now().toString(),
      };
      setValues([...values, newValue]);
    }
    closeEditModal();
  };

  const openEditModal = (id) => {
    const value = values.find((value) => value.id === id);
    setSelectedValue(value);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setSelectedValue(null);
    setEditModalIsOpen(false);
  };

  const addValue = (value) => {
    setValues([...values, value]);
    closeModal();
  };

  const removeValue = (id) => {
    setValues(values.filter((value) => value.id !== id));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const indexOfLastValue = currentPage * valuesPerPage;
  const indexOfFirstValue = indexOfLastValue - valuesPerPage;
  const currentValues = values.slice(indexOfFirstValue, indexOfLastValue);

  const totalPages = Math.ceil(values.length / valuesPerPage);

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
      <main className="main-values">
        <h1>Lista de Valores</h1>
        <button className="Btn-values" onClick={openModal}>
          Adicionar Valor
        </button>
        <table className="table-values">
          <thead>
            <tr>
              <th className="table-header">Descrição</th>
              <th className="table-header">Valor</th>
            </tr>
          </thead>
          <tbody>
            {currentValues.map((value) => (
              <tr key={value.id}>
                <td>{value.description}</td>
                <td>{value.amount}</td>
                <td>
                  <button
                    className="Btn-values"
                    onClick={() => removeValue(value.id)}
                  >
                    Excluir
                  </button>
                  <button
                    className="Btn-values"
                    onClick={() => openEditModal(value.id)}
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
          <ValueForm addValue={addValue} closeModal={closeModal} />
        </Modal>
        <Modal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
          {selectedValue && (
            <ValueForm
              value={selectedValue}
              closeModal={closeEditModal}
              saveValue={saveValue}
            />
          )}
        </Modal>
      </main>
    </>
  );
};

export default Tesoureiro;
