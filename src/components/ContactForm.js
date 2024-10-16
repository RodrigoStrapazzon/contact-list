import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 95%;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactForm = ({ existingContact, onEdit }) => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (existingContact) {
      setContact(existingContact);
    }
  }, [existingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onEdit) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact({ ...contact, id: Date.now() }));
    }

    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <Button type="submit">{onEdit ? 'Editar' : 'Cadastrar'}</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
