import { useEffect } from 'react';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';

const Main = () => {
  const { gifs }:AppState = useGlobalContext();

  return (
      <>
        {gifs !== undefined && gifs.length !== 0 ?
          <img src={gifs[0].images.original.url} alt={gifs[0].title} />
          : <p className='text-white'>Search a gif</p>
        }
      </>
  )
}

export default Main;
