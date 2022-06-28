interface props {
  id: number;
  onDelete(id: number): void;
}

const DeleteButton = ({ id, onDelete }: props) => {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
};

export default DeleteButton;
