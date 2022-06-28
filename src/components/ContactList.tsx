import ContactItem from "./ContactItem";

interface contactProps {
  id: number;
  imageUrl: string;
  name: string;
  tag: string;
}

type props = {
  contacts: Array<contactProps>;
  onDelete(id: number): void;
};

const ContactList = ({ contacts, onDelete }: props) => {
  return (
    <div className="contact-list">
      {contacts.map((contact: contactProps) => (
        <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
