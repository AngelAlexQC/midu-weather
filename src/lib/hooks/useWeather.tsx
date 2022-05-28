import { fetcher } from 'lib/functions/fetcher';
import { Weather } from 'lib/interfaces/weather';
import useSWR from 'swr';
export const useWeather = (search: string) => {
  const { data, error, isValidating } = useSWR(
    `/api/weather?search=${search}`,
    fetcher,
  );

  return {
    weather: data as Weather,
    isLoading: !isValidating && !data,
    error,
  };
};
