import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? '#dc3545' : '#17a2b8')};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
`;

const ContactList = ({ onEdit }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong> <br />
            {contact.email} <br />
            {contact.phone}
          </div>
          <div>
            {}
            <Button onClick={() => onEdit(contact)}>Editar</Button>
            <Button danger onClick={() => dispatch(removeContact(contact.id))}>
              Deletar
            </Button>
          </div>
        </ContactItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;
