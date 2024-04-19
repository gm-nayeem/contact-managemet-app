import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: (state: any, action: any) => {
            if (action.payload.length > 0) {
                state.contacts = action.payload;
            } else {
                state.contacts.push(action.payload);
            }
        },
        updateContact: (state: any, action: any) => {
            const index = state.contacts.findIndex((item: any) => item._id === action.payload._id);
            state.contacts[index] = action.payload;
        },
        removeContact: (state: any, action: any) => {
            state.contacts = state.contacts.filter((item: any) => item._id !== action.payload)
        },
    },
});

export const {
    addContact,
    updateContact,
    removeContact
} = contactSlice.actions;

export default contactSlice.reducer;