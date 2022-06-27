interface props {
  name: string;
  tag: string;
}

const ContactItemBody = ({ name, tag }: props) => {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
};

export default ContactItemBody;
