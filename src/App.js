import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ContactsPage from './pages/contacts/contacts-page.component';
import ContactView from './pages/contact-view/contact-view.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/contacts' component={ContactsPage} />
        <Route path='/contacts/:contactId' component={ContactView} />
      </Switch>
    </div>
  );
}



export default App;
