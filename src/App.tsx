import { useState } from 'react';

import './ui/styles/App.css';

import AppComponent from './ui/components/appComponent/AppComponent.tsx';
import Clock from './ui/components/clock/Clock.tsx';
import Weather from './ui/components/weather/Weather.tsx';
import Notification from './ui/components/notification/Notification.tsx';

import Clockapp from './ui/applications/clockApp/ClockApp.tsx';
import Settings from './ui/applications/settings/Settings.tsx';

import dataApps from '../data.json';

function App() {
  const [openedApp, setOpenedApp] = useState('');

  const apps = {
    Clock: <Clockapp />,
    // Calculator: <Calculator />,
    // Notes: <Notes />,
    Settings: <Settings />,
  };

  return (
    <div className="Container">
      <div className="fixedTopOS">
        <p>wi-fi</p>
        <Clock />
      </div>

      {/* ------------------------------- */}

      {openedApp ? (
        apps[openedApp]
      ) : (
        <div className="Home">
          <swiper-container pagination="true">
            <swiper-slide>
              <div className="page h4">
                <div className="weather w1 h1 ph">
                  <Weather />
                </div>
                <div className="clock w2 h1 ph">
                  <Clock />
                </div>

                <div className="notification w3 h2 ph">
                  <Notification />
                </div>

                {dataApps.aplicativos.map((app, index) => (
                  <AppComponent
                    key={index}
                    title={app.nome}
                    icon={app.icone}
                    setApp={setOpenedApp}
                  />
                ))}
              </div>
            </swiper-slide>

            <swiper-slide>
              <div className="page">
                <div className="title w3 h1 ph">Projetos</div>
                {dataApps.projetos.map((app, index) => (
                  <AppComponent
                    key={index}
                    title={app.nome}
                    icon={app.icone}
                    setApp={setOpenedApp}
                  />
                ))}
              </div>
            </swiper-slide>

            <swiper-slide>
              <div className="page">
                <div className="title w3 h1 ph">Competências</div>
                {dataApps.competencias.map((app, index) => (
                  <AppComponent
                    key={index}
                    title={app.nome}
                    icon={app.icone}
                    setApp={setOpenedApp}
                  />
                ))}
              </div>
            </swiper-slide>
          </swiper-container>

          <div className="mainApps h1">
            {dataApps.fixos.map((app, index) => (
              <AppComponent
                key={index}
                title={app.nome}
                icon={app.icone}
                setApp={setOpenedApp}
              />
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------- */}

      <div className="fixedBotOS">
        <button>show</button>
        <button onClick={() => setOpenedApp('')}>menu</button>
        <button onClick={() => localStorage.clear()}>back</button>
      </div>
    </div>
  );
}

export default App;
