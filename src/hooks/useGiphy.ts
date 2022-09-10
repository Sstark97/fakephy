import { useState, useEffect, RefObject } from 'react';
import { useGlobalContext } from '@hooks/index';
import { Gif, AppState } from '../types';
import api from '@api';

export const useGiphy = (ref: RefObject<HTMLInputElement>) => {
  const [gifToSearch, setGiftToSearch] = useState<string>('marvel')
  const { handleChangeGifsInContext }: AppState = useGlobalContext();

  const handleChangeGifs = () => {
    if (ref.current) {
      const searchValue = ref.current.value;
      setGiftToSearch(searchValue)
      ref.current.blur();
      ref.current.value = "";
    }
  }

  useEffect(() => {
    const loadingGifts = async () => {
      const response = await api.get(`/gifs/search?q=${gifToSearch}&limit=20`)
      const { data } = response;
      handleChangeGifsInContext(data.data)
    }

    loadingGifts()
  }, [gifToSearch])

  return {
    handleChangeGifs
  }
};
