import { useState, useEffect, useMemo, RefObject } from 'react';
import useSWR from 'swr';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';
import api from '@api';

export const useGiphy = (ref: RefObject<HTMLInputElement>) => {
  const [gifToSearch, setGiftToSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [count, setCount]  = useState<number>(0);
  const { gifs, result, handleChangeGifsInContext, handleChangeResultInContext }: AppState = useGlobalContext();

  const loadingGifts = async () => {
    const endPoint: string = gifToSearch === '' ? 'trending?' : `search?q=${gifToSearch}&`;
    const response = await api.get(`/gifs/${endPoint}offset=${page}`);
    const { data } = response;
    handleChangeGifsInContext(data.data)
    setCount(data.pagination.count)
    handleChangeResultInContext(data.pagination.total_count)
  }

  const handlechangePage = (newPage: number) => {
    const nextPage = page + newPage < 0 ? 0 : page + newPage;
    setPage(nextPage)
  }

  const handleChangeGifs = () => {
    if (ref.current) {
      const searchValue = ref.current.value.toLocaleLowerCase();
      setGiftToSearch(searchValue)
      setPage(0)
      ref.current.blur();
      ref.current.value = "";
    }
  };

  const content = useMemo(() => gifs, [gifs]);

  useEffect(() => {
    loadingGifts()
  }, [gifToSearch, page])

  return {
    handleChangeGifs,
    handlechangePage,
    gifs: content,
    count,
    result,
    page
  }
};
