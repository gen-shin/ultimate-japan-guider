import React from 'react';
import { InputForm } from '../InputForm';
import { Video, MainMenu } from '../parts';
import BrowserNotification from 'browser-notification-for-web-app';

export default class App extends React.Component {
  async componentDidMount() {
    const hasPremission = await BrowserNotification.askPermission();
    if (hasPremission) {
      console.log('Permission granted.');
    } else {
      console.log('Permission not granted.');
    }
  }

  render() {
    return (
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
  }
}
