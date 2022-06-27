import ContactItem from "./ContactItem";

interface contactProps {
  id: number;
  imageUrl: string;
  name: string;
  tag: string;
}

interface props {
  contacts: Array<contactProps>;
}

const ContactList = ({ contacts }: props) => {
  return (
    <div className="contact-list">
      {contacts.map((contact: contactProps) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
