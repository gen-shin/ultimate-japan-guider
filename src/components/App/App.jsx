import React from 'react';
import { InputForm } from '../InputForm';
import { Video, MainMenu } from '../parts';

const App = () => (
  <div>
    <MainMenu />
    <header className="header">
      <Video />
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Ultimate</span>
          <span className="heading-primary--sub">your trip at Japan</span>
        </h1>
      </div>
    </header>
    <main className="main">
      <div className="App">
        <InputForm />
      </div>
    </main>
    <footer className="footer"></footer>
  </div>
);

export default App;
