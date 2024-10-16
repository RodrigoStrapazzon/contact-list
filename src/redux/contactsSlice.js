import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Michael Scott', email: 'scotmichael@dundermiflin.com', phone: '01555332' },
  { id: 2, name: 'Pamela Morgan Halpert', email: 'beasleypamela@dundermiflin.com', phone: '01555332' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, editContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
