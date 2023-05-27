import React, { useState } from "react";

const ValueForm = ({ value, saveValue, closeModal }) => {
  const [description, setDescription] = useState(value ? value.description : "");
  const [amount, setAmount] = useState(value ? value.amount : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "" || amount.trim() === "") {
      return;
    }

    const newValue = {
      id: value ? value.id : null,
      description: description.trim(),
      amount: parseFloat(amount),
    };

    saveValue(newValue);
  };

  return (
    <form className="value-form" onSubmit={handleSubmit}>
      <h2>{value ? "Editar Valor" : "Adicionar Valor"}</h2>
      <div className="form-group">
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Valor:</label>
        <input
          type="number"
          id="amount"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="Btn-values">
          {value ? "Salvar" : "Adicionar"}
        </button>
        <button type="button" className="Btn-values" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ValueForm;
