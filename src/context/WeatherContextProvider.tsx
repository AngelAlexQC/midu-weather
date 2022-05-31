import { Place } from 'lib/interfaces/place';
import { Weather } from 'lib/interfaces/weather';
import { searchPlace, getWeather } from 'lib/services/apiService';
import {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface WeatherContextProps {
  weather: Weather | null;
  place: Place | null;
  changeLocation: (place: Place) => void;
}

export const WeatherContext = createContext<WeatherContextProps>({
  weather: null,
  place: null,
  changeLocation: () => {},
});

const WeatherContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  // weather and place should be stored in local storage, if not, detect the location and fetch weather
  const [weather, setWeather] = useState<Weather | null>(null);
  const [place, setPlace] = useState<Place | null>(() => {
    // Prevent 'localStorage is not defined' error
    if (typeof window === 'undefined') {
      return null;
    }
    const place = localStorage.getItem('place');
    if (place) {
      return JSON.parse(place);
    }
    return null;
  });

  useEffect(() => {
    const getWeatherAndPlace = async (place: Place | string) => {
      const placeToSearch =
        typeof place === 'string' ? place : place.name + ',' + place.country;
      const weather = await getWeather(placeToSearch);
      setWeather(weather);
      typeof place === 'string' ? setPlace(null) : setPlace(place);
    };
    if (!place) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getWeatherAndPlace(latitude + ',' + longitude);
      });
    } else {
      getWeatherAndPlace(place);
    }
  }, [place]);

  const changeLocation = (place: Place) => {
    setPlace(place);
    getWeather(place.name + ',' + place.country).then((weather) => {
      setWeather(weather);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        place,
        changeLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
