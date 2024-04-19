import { Contact } from '../types/intex';
import { serverRequest } from "../utils/request";

// add contact
export const createContact = async (contact: Contact) => {
    try {
        const res = await serverRequest.post("/contacts", contact);
        return res.data.payload;
    } catch (err) {
        console.error(err);
    }
}

// modify contact
export const modifyContact = async (id: string, contact: Contact) => {
    try {
        const res = await serverRequest.put(`/contacts/${id}`, contact);
        return res.data.payload;
    } catch (err) {
        console.error(err);
    }
}

// deletre contact
export const deleteContact = async (id: string) => {
    try {
        const res = await serverRequest.delete(`/contacts/${id}`);
        return res.data.payload;
    } catch (err) {
        console.error(err);
    }
}

// get single contact
export const getSingleContact = async (id: string) => {
    try {
        const res = await serverRequest.get(`/contacts/${id}`);
        return res.data.payload;
    } catch (err) {
        console.error(err);
    }
}
// get all contact
export const getAllContact = async () => {
    try {
        const res = await serverRequest.get(`/contacts`);
        return res.data.payload;
    } catch (err) {
        console.error(err);
    }
}