import React from "react";

const ContactsListItem = ({ name, phone }) => {
  return (
    <li className="contactsListItem">
      <b className="contactName">{name}:</b>
      {phone}
    </li>
  );
};

export default ContactsListItem;
