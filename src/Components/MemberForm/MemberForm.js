import React, { useState } from "react";
import "./index.MemberForm.css";

const MemberForm = ({ addMember, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = { id: Date.now(), name: name, email: email };
    addMember(newMember);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default MemberForm;
