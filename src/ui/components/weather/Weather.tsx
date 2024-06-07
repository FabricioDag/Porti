import './weather.css';

import Cloud from '../../icons/Cloud.svg';

function Weather() {
  return (
    <div className={'weather'}>
      <div className="weatherBox">
        <h3>Weather</h3>
        <i className={'weatherIcon'}>
          <img src={Cloud} alt="" />
        </i>
      </div>
      <p className={'weatherNumber'}>20°</p>
    </div>
  );
}

export default Weather;
