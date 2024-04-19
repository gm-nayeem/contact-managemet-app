import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./allContact.css";
import Card from "../../components/card/Card";
import { getAllContact } from "../../redux/apiCalls";
import { addContact } from "../../redux/contactReducer";

const AllContact = () => {
  const contacts = useSelector((state: any) => state.contact.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllContact = async () => {
      const allContacts = await getAllContact();
      if (allContacts.length > 0) {
        dispatch(addContact(allContacts));
      }
    };

    fetchAllContact();
  }, [dispatch]);

  return (
    <div className="all-contact">
      {contacts?.length > 0 &&
        contacts.map((contact: any) => (
          <Card key={contact._id} contact={contact} />
        ))}
    </div>
  );
};

export default AllContact;
