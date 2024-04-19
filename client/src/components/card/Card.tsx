import { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

import "./card.css";
import { Contact } from "../../types/intex";
import ProfileImg from "../../assets/profile.png";

const Card = ({ contact }: { contact: Contact }) => {
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <div className="card">
      <div className="profile-img">
        <img src={ProfileImg} alt="profile" />
      </div>
      <div className="profile-info">
        <h4>{contact?.name}</h4>
        <p>{contact?.email}</p>
        <p>{contact?.phone}</p>
        <p>{contact?.address}</p>
      </div>
      <div className="profile-menu">
        <div className="btn">
          <button>Update</button>
          <button>Delete</button>
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
    </div>
  );
};

export default Card;
