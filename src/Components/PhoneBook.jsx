

import  { useState } from "react";
import "./Phonebook.css";

const initial = Array(10000)
  .fill(1)
  .map((_, i) => ({
    firstName: Math.floor(Math.random() * 1000).toString(),
    lastName: Math.floor(Math.random() * 1000).toString(),
    phoneNumber: i,
  }));

const Phonebook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { firstName, lastName, phoneNumber };
    setContacts([...contacts, newContact]);

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  const sortedContacts = [...contacts].sort((a, b) =>
    a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phonebook;