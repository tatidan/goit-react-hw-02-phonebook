import React, { Component } from "react";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

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
    // const { name, phone } = this.state;
    // const newContact = { name: name, phone: phone };
    // this.state.contacts.push(...this.state.contacts, newContact);
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  //при втором сабмите элементов в массиве уже три, 3 === 7
  // сначала 1, затем 1,1,2, затем 1,1,2, затем 1,1,2, 1,1,2, 3

  reset = () => {
    this.setState({ name: "", phone: "" });
    //очистить инпуты от текста
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="formLabel">
          Name
          <input
            className="nameInput"
            type="text"
            name="name"
            // value=
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
            //value=
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="submitBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
