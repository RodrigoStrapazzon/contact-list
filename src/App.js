import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <Provider store={store}>
      <div className="App">
        {}
        <ContactForm existingContact={editingContact} onEdit={!!editingContact} />
        <ContactList onEdit={handleEdit} />
      </div>
    </Provider>
  );
};

export default App;
