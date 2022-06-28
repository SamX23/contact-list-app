import ContactList from "./ContactList";
import { getData } from "../utils/data";
import { useState } from "react";

const ContactContainer = () => {
  const [stateContact, setStateContact] = useState({
    contacts: getData(),
  });

  const contacts = getData();

  const onDeleteHandler = (id: number) => {
    const contacts = stateContact.contacts.filter(
      (contact) => contact.id !== id
    );

    setStateContact({ contacts });
  };

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactContainer;
