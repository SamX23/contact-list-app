import ContactList from "./ContactList";
import { getData } from "../utils/data";
import { useState } from "react";
import ContactInput from "./ContactInput";

const ContactContainer = () => {
  const [state, setState] = useState({ contacts: getData() });

  const onDeleteHandler = (id: number) => {
    const contacts = state.contacts.filter((contact: any) => contact.id !== id);

    setState({ contacts });
  };

  const onAddContactHandler = ({
    name,
    tag,
  }: {
    name: string;
    tag: string;
  }) => {
    setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "assets/images/default.jpg",
          },
        ],
      };
    });
  };

  return (
    <div className="contact-app">
      <h1>Contact List App</h1>

      <h2>Add Contact</h2>
      <ContactInput addContact={onAddContactHandler} />

      <h2>List</h2>
      <ContactList contacts={state.contacts} onDelete={onDeleteHandler} />
    </div>
  );
};

export default ContactContainer;
