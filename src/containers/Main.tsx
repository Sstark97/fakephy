import ContentList from '@components/ContentList';
import { useGiphy } from '@hooks/index';
import { GifHook } from '../types';

const Main = () => {
  const { gifs }:GifHook = useGiphy();

  return (
      <>
        {gifs !== undefined && gifs.length !== 0 ?
          <ContentList content={gifs} />
          : <p className='text-white text-center'>Search a gif</p>
        }
      </>
  )
}

export default Main;
