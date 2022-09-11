import useSWR from 'swr';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';

export const useGiphySWR = () => {
    const {
        search,
        page,
        handleChangeSearchInContext,
        handleChangePageInContext,
        handleChangeResultInContext,
        handleChangeCountInContext
    }: AppState = useGlobalContext();

    const { data, error } = useSWR(search !== "" ? [`marvel&offset=${page}`, `${search}&offset=${page}`] : null);

    const mutateGifs = (searchQuery: string) => {
        handleChangeSearchInContext(searchQuery)
        handleChangePageInContext(0)
        handleChangeResultInContext(data?.data?.pagination?.total_count || 0);
        handleChangeCountInContext(data?.data?.pagination?.count || 0);
    }

    const mutatePage = (newPage: number) => {
        const nextPage = page + newPage < 0 ? 0 : page + newPage;
        handleChangePageInContext(nextPage)
    }

    return {
        gifs: data?.data?.data,
        isLoading: !error && !data,
        isError: error,
        page,
        count: data?.data?.pagination?.count,
        mutateGifs,
        mutatePage,
    }

};
