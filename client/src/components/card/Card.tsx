import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

import "./card.css";
import { deleteContact } from "../../redux/apiCalls";
import { removeContact } from "../../redux/contactReducer";
import useUpdateModal from "../../hooks/useUpdateModal";
import UpdateModal from "../modals/updateModal";

const Card = ({ contact }: { contact: any }) => {
  const [contactId, setContactID] = useState("");
  const [isBookmark, setIsBookmark] = useState(false);

  const updateModal = useUpdateModal();

  const dispatch = useDispatch();

  const handleDelete = async (id: string) => {
    const deletedContact = await deleteContact(id);
    if (deletedContact) {
      dispatch(removeContact(deletedContact._id));
    }
  };

  return (
    <div className="card">
      <div className="profile-img">
        <img src={contact?.profilePicture} alt="profile" />
      </div>
      <div className="profile-info">
        <h4>{contact?.name}</h4>
        {contact?.email && <p>{contact?.email}</p>}
        <p>{contact?.phone}</p>
        <p>{contact?.address}</p>
      </div>
      <div className="profile-menu">
        <div className="btn">
          <button
            onClick={() => {
              updateModal.onOpen();
              setContactID(contact?._id);
            }}
          >
            Update
          </button>
          <button onClick={() => handleDelete(contact?._id)}>Delete</button>
        </div>
        {isBookmark ? (
          <div
            className="bookmark-icon"
            onClick={() => setIsBookmark(!isBookmark)}
          >
            <BsFillBookmarkCheckFill />
          </div>
        ) : (
          <div
            className="bookmark-icon"
            onClick={() => setIsBookmark(!isBookmark)}
          >
            <BsBookmark />
          </div>
        )}
      </div>

      {updateModal.isOpen && <UpdateModal contactId={contactId} />}
    </div>
  );
};

export default Card;
