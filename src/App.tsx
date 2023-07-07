import React from 'react';
import './App.css';
import SideMenu from './component/SideMenu/Sidemenu';



function App() {

  const menuConfig = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
  },
];

  return (
    <div className="App">
      <SideMenu menuConfig={menuConfig} />

    </div>
  );
}

export default App;
