import useSWR from 'swr';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';

export const useGiphySWR = () => {
    const { search, handleChangeSearchInContext }: AppState = useGlobalContext();
    const { data, error } = useSWR(search !== "" ? ["marvel", search] : null);

    const mutateGifs = (searchQuery: string) => {
        handleChangeSearchInContext(searchQuery)
    }

    return {
        gifs: data?.data?.data,
        isLoading: !error && !data,
        isError: error,
        mutateGifs
    }

};
