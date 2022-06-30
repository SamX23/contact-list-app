import { ChangeEvent, FormEvent, useState } from "react";

interface props {
  addContact(args: { name: string; tag: string }): void;
}

const ContactInput = ({ addContact }: props) => {
  const [state, setState] = useState({ name: "", tag: "" });

  const onNameChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const onTagChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  };

  const onSubmitEventHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addContact(state);
  };

  return (
    <form className="contact-input" onSubmit={onSubmitEventHandler}>
      <input
        type="text"
        placeholder="Nama"
        onChange={onNameChangeEventHandler}
        value={state.name}
      />
      <input
        type="text"
        placeholder="Tag"
        onChange={onTagChangeEventHandler}
        value={state.tag}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactInput;
