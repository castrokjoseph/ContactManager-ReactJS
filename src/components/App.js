import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts =[
    {
      id: "1",
      name: "Castro",
      phone: "987456321",
      email:"castro@castrokjoseph.in"
    },
    {
      id: "2",
      name: "Joseph",
      phone: "963258741",
      email:"joseph@castrokjoseph.in"
    }
  ]
  return (
   <div className='ui container'>
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;
