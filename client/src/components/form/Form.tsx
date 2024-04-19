import { useState, ChangeEvent, FormEvent } from "react";

import "./form.css";
import { Contact } from "../../types/intex";

interface FormProps {
  title: string;
  buttonLabel: string;
  handleSubmit: (e: any, contact: Contact) => void;
}

const Form = ({ title, buttonLabel, handleSubmit }: FormProps) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [file, setFile] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) =>
          handleSubmit(e, {
            ...newContact,
            profilePicture: file,
          })
        }
      >
        <div className="form-title">
          <h2>{title}</h2>
        </div>
        <div className="form-group">
          <label htmlFor="" className="lable">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter full name"
            value={newContact.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="lable">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="enter email address"
            value={newContact.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="lable">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="enter phone number"
            value={newContact.phone}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="lable">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="enter address"
            value={newContact.address}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="lable">
            Profile Picture
          </label>
          <input
            type="file"
            name="file"
            required
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
};

export default Form;
