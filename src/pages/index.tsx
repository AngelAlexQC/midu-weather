import { WeatherHeader } from 'components/wheather/header/WeatherHeader';

import type { NextPage } from 'next';
import { useContext } from 'react';
import { WeatherContext } from 'src/context/WeatherContextProvider';

const Home: NextPage = () => {
  const { weather, changeLocation } = useContext(WeatherContext);
  return (
    <>
      {weather && (
        <WeatherHeader weather={weather} onChangeLocation={changeLocation} />
      )}
    </>
  );
};

export default Home;
