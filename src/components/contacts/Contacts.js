import React from "react";
import ContactsListItem from "./contactsListItem/ContactsListItem";

const Contacts = ({ contacts }) => {
  return (
    <ul className="contactsList">
      {contacts.map((contact) => (
        <ContactsListItem {...contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default Contacts;
