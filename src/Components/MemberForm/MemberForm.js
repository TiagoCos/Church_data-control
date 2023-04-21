import React, { useState } from "react";
import "./index.MemberForm.css";

const MemberForm = ({ addMember, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [observation, setObservation] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = { 
      id: Date.now(), 
      name: name, 
      email: email,
      birthdate: birthdate,
      maritalStatus: maritalStatus,
      gender: gender,
      address: address,
      phone: phone,
      observation: observation,
      isActive: isActive
    };
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
        CPF:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      
      <label>
        Data de nascimento:
        <input type="date" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} />
      </label>

      <label>
        Estado civil:
        <input type="text" value={maritalStatus} onChange={(event) => setMaritalStatus(event.target.value)} />
      </label>

      <label>
        Gênero:
        <input type="text" value={gender} onChange={(event) => setGender(event.target.value)} />
      </label>

      <label>
        Endereço:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>

      <label>
        Telefone:
        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
    
      <label>
        Observação:
        <input type="text" value={observation} onChange={(event) => setObservation(event.target.value)} />
      </label>
    
      <label>
        Membro ativo?
        <input type="checkbox" checked={isActive} onChange={(event) => setIsActive(event.target.checked)} />
      </label>
    
      <button className='btn-Member' type="submit">Salvar</button>
    </form>
  );
};

export default MemberForm;
