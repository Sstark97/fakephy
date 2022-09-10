import { useState, useEffect, useMemo, RefObject } from 'react';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';
import api from '@api';

export const useGiphy = (ref: RefObject<HTMLInputElement>) => {
  const [gifToSearch, setGiftToSearch] = useState<string>('')
  const { gifs, handleChangeGifsInContext }: AppState = useGlobalContext();

  const loadingGifts = async () => {
    const endPoint: string = gifToSearch === '' ? 'trending?' : `search?q=${gifToSearch}&`;
    const response = await api.get(`/gifs/${endPoint}limit=20`)
    const { data } = response;
    handleChangeGifsInContext(data.data)
  }

  const handleChangeGifs = () => {
    if (ref.current) {
      const searchValue = ref.current.value.toLocaleLowerCase();
      setGiftToSearch(searchValue)
      ref.current.blur();
      ref.current.value = "";
    }
  };

  const content = useMemo(() => gifs, [gifs]);

  useEffect(() => {
    loadingGifts()
  }, [gifToSearch])

  return {
    handleChangeGifs,
    gifs: content
  }
};
