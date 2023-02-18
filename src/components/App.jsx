import React, { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterChange = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  filterHandler = () => {
    return this.state.contacts.filter(contact => {
      if (
        contact.name.toLowerCase().includes(this.state.filter) ||
        contact.number.toLowerCase().includes(this.state.filter)
      ) {
        return contact;
      }
    });
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          {/* <ContactForm /> */}

          <h2>Contacts</h2>
          <Filter onFilterChange={this.onFilterChange} />
          <ContactList filteredContacts={this.filterHandler()} />
        </div>
      </Container>
    );
  }
}

export default App;
