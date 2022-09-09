import { useState, useEffect, RefObject } from 'react';
import { useGlobalContext } from '@hooks/index';
import { Gif, AppState } from '../types';
import api from '@api';

export const useGiphy = <T>(ref: RefObject<T>) => {
    const [gifToSearch, setGiftToSearch] = useState<string>('marvel')
    const { handleChangeGifsInContext }: AppState = useGlobalContext();

    const handleChangeGifs = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGiftToSearch(e.target.value)
    }
  
    useEffect(() => {
      const loadingGifts = async () => {
        const response = await api.get(`/gifs/search?q=${gifToSearch}`)
        const { data } = response;
        handleChangeGifsInContext(data.data)
      }
  
      loadingGifts()
    }, [gifToSearch])

    return {
        handleChangeGifs
    }
};
