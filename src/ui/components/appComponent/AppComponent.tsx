import './appComponent.css';
import app from '../../icons/App.svg';

function AppComponent({ title, setApp, icon }) {
  const handleClick = () => {
    setApp(title);
  };

  return (
    <div className="appComponent w1 h1">
      <button onClick={handleClick} className="appIcon">
        <i className={'iconC'}>
          <img src={icon} alt={title} />
        </i>
      </button>
      {/* <p className="appName">{title}</p> */}
    </div>
  );
}

export default AppComponent;
