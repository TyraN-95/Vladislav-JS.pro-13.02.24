import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Welcome in my React app</h1>
    </header>
  );
}

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li><a href='#'>About us</a>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Team</a></li>
        <li><a href='#'>Publications</a></li>
        <li><a href='#'>Contact</a></li></li>
      </ul>
    </nav>
  );
}

const Inform = () => {
  return (
    <section className='inform'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorem maiores accusantium, tenetur perspiciatis quos provident modi atque illum, hic totam labore doloremque architecto eaque rem vitae reiciendis consequatur facere!</p>
    </section>
  );
}

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-nav-inform'>
        <Navigation />
        <Inform />
      </div>
    </div>
    
  );
}
export default App;
