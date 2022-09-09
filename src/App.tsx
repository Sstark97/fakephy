import { useState, useEffect } from 'react';
import api from './api';

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
    <div className="h-screen grid place-content-center">
      {gifs !== undefined && 
        <img src={gifs[0].images.original.url} alt={gifs[0].title} />
      }
    </div>
  )
}

export default App
