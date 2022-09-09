import { useMemo } from 'react';
import ContentList from '@components/ContentList';
import { useGlobalContext } from '@hooks/index';
import { AppState } from '../types';

const Main = () => {
  const { gifs }:AppState = useGlobalContext();
  const content = useMemo(() => gifs, [gifs]);

  return (
      <>
        {gifs !== undefined && gifs.length !== 0 ?
          <ContentList content={content} />
          : <p className='text-white'>Search a gif</p>
        }
      </>
  )
}

export default Main;
