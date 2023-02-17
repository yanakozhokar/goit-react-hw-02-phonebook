import React, { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [{ name: 'Ann', id: 1 }],
    name: '',
  };

  onInputSearch = event => {
    const input = event.currentTarget.value.toLowerCase();
    const result = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(input); // объект из contacts
    });
  };

  render() {
    return (
      <Container>
        <Section title="Contacts">
          <form>
            <label>
              Find contacts by name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={event => {
                  this.onInputSearch(event);
                }}
                required
              />
            </label>
          </form>
        </Section>
      </Container>
    );
  }
}

export default App;
