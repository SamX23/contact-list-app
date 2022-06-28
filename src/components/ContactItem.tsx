import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

interface props {
  id: number;
  imageUrl: string;
  name: string;
  tag: string;
  onDelete(id: number): void;
}

const ContactItem = ({ id, imageUrl, name, tag, onDelete }: props) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default ContactItem;
