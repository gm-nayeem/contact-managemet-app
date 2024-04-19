import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./addContact.css";
import { Contact } from "../../types/intex";
import Form from "../../components/form/Form";
import { createContact } from "../../redux/apiCalls";
import upload from "../../utils/upload";
import { addContact } from "../../redux/contactReducer";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    contact: Contact
  ) => {
    e.preventDefault();

    if (contact.profilePicture) {
      const url = await upload(contact.profilePicture);

      if (url) {
        const data = await createContact({
          ...contact,
          profilePicture: url,
        });

        if (data) {
          dispatch(addContact(data));
          navigate("/contacts");
        }
      }
    }
  };

  return (
    <div className="add-conatct">
      <Form
        title="Add New Contact"
        buttonLabel="Add Contact"
        handleSubmit={handleSubmit}
        required={true}
      />
    </div>
  );
};

export default AddContact;
