import ContentList from '@components/ContentList';
import { useGiphySWR } from '@hooks/index';
import { GifHook } from '../types';

const Main = () => {
  const { gifs }: GifHook = useGiphySWR();

  return (
      <>
        {gifs !== undefined ?
          <ContentList content={gifs} />
          : <p className='text-white text-center'>Search a gif</p>
        }
      </>
  )
}

export default Main;
