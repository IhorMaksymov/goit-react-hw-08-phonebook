import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { name, number });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


const deleteContact = createAsyncThunk(
  'contacts/deleteTask',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchContacts, addContact, deleteContact };