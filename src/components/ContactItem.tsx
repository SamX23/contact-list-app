import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

interface props {
  imageUrl: string;
  name: string;
  tag: string;
}

const ContactItem = ({ imageUrl, name, tag }: props) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
};

export default ContactItem;
