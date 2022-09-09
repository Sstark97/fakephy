import { useState, useEffect } from 'react';
import Layout from './containers/Layout';
import api from '@api/index';

function App() {
  const [gifs, setGifts] = useState<any[]>()

  useEffect(() => {
    const loadingGifts = async () => {
      const response = await api.get('/gifs/search?q=marvel')
      const { data } = response;
      setGifts(data.data)
    }

    loadingGifts()
  }, [])

  return (
    <Layout>
      {gifs !== undefined && 
        <img src={gifs[0].images.original.url} alt={gifs[0].title} />
      }
    </Layout>
  )
}

export default App
