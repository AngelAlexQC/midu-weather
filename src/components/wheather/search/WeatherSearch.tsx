import { FunctionComponent, useState } from 'react';
import { Place } from 'lib/interfaces/place';
import AsyncSelect from 'react-select/async';
import { SingleValue } from 'react-select';
import { searchPlace } from 'lib/services/apiService';

interface WeatherSearchProps {
  onSelect: (place: Place) => void;
}
interface CityOption {
  label: string;
  value: number;
}

export const WeatherSearch: FunctionComponent<WeatherSearchProps> = ({
  onSelect,
}) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Place[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
  const cityToOption = (city: Place): CityOption => ({
    label: city.name + ', ' + city.country,
    value: city.id,
  });
  const cityOptions = async (search: string) => {
    const cities = await searchPlace(search);
    setSuggestions(cities);
    return cities.map(cityToOption);
  };
  const handleSelect = (selectedOption: SingleValue<CityOption>) => {
    if (selectedOption) {
      setSelectedCity(selectedOption);
      const city = suggestions.find((city) => city.id === selectedOption.value);
      if (city && onSelect) {
        onSelect(city);
      }
    }
  };

  return (
    <div className="my-3">
      <AsyncSelect
        defaultOptions
        loadOptions={cityOptions}
        onChange={handleSelect}
        placeholder="Search for a city"
        value={selectedCity}
        inputValue={search}
        onInputChange={setSearch}
      />
    </div>
  );
};
