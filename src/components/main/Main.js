import React, { Component } from "react";
import "../../index.css";
import Contacts from "../contacts/Contacts";
import Form from "../form/Form";
import SearchForm from "../searchForm/SearchForm";
import Section from "../section/Section";
// import { v4 as uuidv4 } from "uuid";

// uuidv4();

class Main extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  onSearchHandler = (e) => {
    this.setState({ filter: e.currentTarget.value });
    // console.log(e.currentTarget.value);
  };

  onFilterRender = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    // const filteredContacts = onFilterRender();
    // console.log(filteredContacts);

    return (
      <>
        <Section title="Phonebook">
          <Form addNewContact={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <SearchForm
            onSearchHandler={this.onSearchHandler}
            filter={this.state.filter}
          />
          <Contacts
            contacts={this.state.contacts}
            onFilterRender={this.onFilterRender}
          />
        </Section>
      </>
    );
  }
}

export default Main;
