import { FormEvent } from "react";

import "./updateModal.css";
import Form from "../form/Form";
import { Contact } from "../../types/intex";
import { modifyContact } from "../../redux/apiCalls";
import { updateContact } from "../../redux/contactReducer";
import { useDispatch } from "react-redux";
import useUpdateModal from "../../hooks/useUpdateModal";
import upload from "../../utils/upload";

const UpdateModal = ({ contactId }: { contactId: string }) => {
  const updateModal = useUpdateModal();

  const dispatch = useDispatch();

  const handleUpdate = async (
    e: FormEvent<HTMLFormElement>,
    contact: Contact
  ) => {
    e.preventDefault();

    updateModal.onClose();

    const { name, email, phone, address, profilePicture } = contact;

    const updateContactInfo: any = {};

    if (name) updateContactInfo.name = name;
    if (email) updateContactInfo.email = email;
    if (phone) updateContactInfo.phone = phone;
    if (address) updateContactInfo.address = address;
    if (profilePicture) {
      const url = await upload(profilePicture);
      updateContactInfo.profilePicture = url;
    }

    if (Object.values(updateContactInfo).length === 0) return;

    const updatedContact = await modifyContact(contactId, updateContactInfo);
    if (updatedContact) {
      dispatch(updateContact(updatedContact));
    }
  };

  return (
    <div className="modal">
      <Form
        title="Update Contact"
        buttonLabel="Update Contact"
        handleSubmit={handleUpdate}
        cancelButton="Cancel"
        required={false}
      />
    </div>
  );
};

export default UpdateModal;
