import ContactList from "./ContactList";
import { getData } from "../utils/data";
import { useState } from "react";

const ContactContainer = () => {
  const [state, setState] = useState({ contacts: getData() });

  const onDeleteHandler = (id: number) => {
    const contacts = state.contacts.filter((contact: any) => contact.id !== id);

    setState({ contacts });
  };

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={state.contacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactContainer;
