import { useState, useEffect, useMemo, RefObject } from 'react';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';
import api from '@api';

export const useGiphy = (ref: RefObject<HTMLInputElement>) => {
  const [gifToSearch, setGiftToSearch] = useState<string>('marvel')
  const { gifs, handleChangeGifsInContext }: AppState = useGlobalContext();

  const handleChangeGifs = () => {
    if (ref.current) {
      const searchValue = ref.current.value;
      setGiftToSearch(searchValue)
      ref.current.blur();
      ref.current.value = "";
    }
  };

  const content = useMemo(() => gifs, [gifs]);

  useEffect(() => {
    const loadingGifts = async () => {
      const response = await api.get(`/gifs/search?q=${gifToSearch}&limit=20`)
      const { data } = response;
      handleChangeGifsInContext(data.data)
    }
    loadingGifts()
  }, [gifToSearch])

  return {
    handleChangeGifs,
    gifs: content
  }
};
