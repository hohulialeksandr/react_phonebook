import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const load = localStorage.getItem('contacts')
    const push = JSON.parse(load)
    if(load) {
      this.setState({contacts: push})
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    const newContacts = this.state.contacts.slice(0).concat({ id, name, number })
    const find = this.state.contacts.find(i => i.name === name)
    if (find) {
      alert(`${name} is already in contacts`)
    } else {
      this.setState({ contacts: newContacts })
    }
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    form.reset();
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  deleteContact = (e) => {
    const id = e.target.value
    const deleteContact = this.state.contacts.filter(el => el.id !== id)
    this.setState({ contacts: deleteContact })
  }

  render() {
    const contacts = this.state.contacts;

    const normal = this.state.filter.toLowerCase()

    const visible = contacts.filter(name =>
      name.name.toLowerCase().includes(normal)
    )
    return (
      <div>
        <ContactForm handleSubmit={this.handleSubmit} />
        <div>
          <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
          <h1>Contacts</h1>
          <ContactList visible={visible} deletes={this.deleteContact} />
        </div>
      </div>
    );
  }
}

export default App;