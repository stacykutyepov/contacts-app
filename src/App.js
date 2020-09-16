import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ContactsPage from './pages/contacts/contacts-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/contacts' component={ContactsPage} />
      </Switch>



    </div>
  );
}



export default App;
