import { WeatherHeader } from 'components/wheather/header/WeatherHeader';
import { useWeather } from 'lib/hooks/useWeather';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { weather } = useWeather('Chamanga, Ecuador');
  return <>{weather && <WeatherHeader weather={weather} />}</>;
};

export default Home;
