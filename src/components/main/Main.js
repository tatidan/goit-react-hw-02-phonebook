import React, { Component } from "react";
import "../../index.css";
import Section from "../section/Section";
// import { v4 as uuidv4 } from "uuid";

// const { v4: uuidv4 } = require("uuid");
// uuidv4();

class Main extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  //в контакты добавляем объект в виде {id: name:}

  handleChange = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.state.name);
    // console.log(this.state.phone);
    const { name, phone } = this.state;
    const newContact = { name: name, phone: phone };
    this.state.contacts.push(...this.state.contacts, newContact);
    console.log(this.state);
  };
  //при втором сабмите элементов в массиве уже три, 3 === 7
  // сначала 1, затем 1,1,2, затем 1,1,2, затем 1,1,2, 1,1,2, 3
  render() {
    return (
      <>
        <Section title="Phonebook">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="formLabel">
              Name
              <input
                className="nameInput"
                type="text"
                name="name"
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>

            <label className="formLabel">
              Phone number
              <input
                className="phoneInput"
                type="text"
                name="phone"
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" className="submitBtn">
              Add contact
            </button>
          </form>
        </Section>
        <Section title="Contacts"></Section>
      </>
      // <input
      //   type="text"
      //   name="name"
      //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      //   required
      // />
    );
  }
}

export default Main;
