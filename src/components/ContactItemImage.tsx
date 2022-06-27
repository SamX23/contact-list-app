interface props {
  imageUrl: string;
}

const ContactItemImage = ({ imageUrl }: props) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
};

export default ContactItemImage;
