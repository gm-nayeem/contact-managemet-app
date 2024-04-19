import "./allContact.css";
import { contactsData } from "../../data";
import Card from "../../components/card/Card";

const AllContact = () => {
  return (
    <div className="all-contact">
      {contactsData?.length > 0 &&
        contactsData.map((contact, index) => (
          <Card key={index} contact={contact} />
        ))}
    </div>
  );
};

export default AllContact;
