import { WeatherHeader } from 'components/wheather/header/WeatherHeader';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [city, setCity] = useState('Paris');
  const [country, setCountry] = useState('France');
  const [temperature, setTemperature] = useState(20);
  const [status, setStatus] = useState('Cloudy');
  return (
    <>
      <WeatherHeader
        city={city}
        country={country}
        temperature={temperature}
        status={status}
      />
    </>
  );
};

export default Home;
