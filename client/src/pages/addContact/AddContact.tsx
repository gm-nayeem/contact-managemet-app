import { FormEvent } from "react";

import "./addContact.css";
import Form from "../../components/form/Form";
import { Contact } from "../../types/intex";

const AddContact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>, contact: Contact) => {
    e.preventDefault();

    console.log(contact);
  };

  return (
    <div className="add-conatct">
      <Form
        title="Add New Contact"
        buttonLabel="Add Contact"
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddContact;
