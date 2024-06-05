import { useState, useEffect } from 'react';
import './App.css';
import Swal from "sweetalert2";
import './modal.css';

function App() {
  const [cancion, setCancion] = useState('');
  const [canciones, setCanciones] = useState([]);
  const [artists, setArtists] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const storedCancion = localStorage.getItem('cancion');
    if (storedCancion) {
      setCancion(storedCancion);
    }
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes escribir un dato de busqueda valido, artista, nombre de canción, etc.",
      });
      return;
    }
    console.log(cancion);
    setCancion('');
    getSong(cancion);
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd8e6ebfb3cmshceeab2ab980eac2p15b1e5jsn3a5a6439ec8d',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=5&numberOfTopResults=5`;
      let data = await fetch(url, options);
      let res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`ups.. error: ${error}`);
    }
  }

  const handleInputChange = (e) => {
    setCancion(e.target.value);
    localStorage.setItem('cancion', e.target.value);
  };

  const fetchArtists = async () => {
    const artistIds = '7rkW85dBwwrJtlHRDkJDAC,3TVXtAsR1Inumwj472S9r4,7dGJo4pcD2V6oG8kP0tJRR,5H4yInM5zmHqpKIoMNAx4r,1Xyo4u8uXC1ZmMpatF05PJ,2hlmm7s2ICUX0LVIhVFlZQ,0eDvMgVFoNV3TpwtrVCoTj,5VadK1havLhK1OpKYsXv9y,5K4W6rqBFWDnAN6FQUkS6x,0iEtIxbK0KxaSlF7G42ZOp';
    const url = `https://spotify23.p.rapidapi.com/artists/?ids=${artistIds}`;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setArtists(result.artists);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching the artists:', error);
    }
  };

  return (
    <div>
      <img className="icon" src="spotify.svg" alt="Icono SVG" width="80" height="80" />
      <h2>Spotify App</h2>
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-search-heart" /></span>
          <input type="text" id='k' className='form-control' value={cancion} onChange={handleInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
          &nbsp;<button className='button_slide slide_down' type='submit'>Buscar</button>
        </div>
      </form>
      {canciones.map((cancion, index) => (
        <>&nbsp;&nbsp;
          <div id='portadas' key={index}>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="" />
            <h2 text='Artista'> {cancion.data.artists.items[0].profile.name}</h2>
            <h2> {cancion.data.name} </h2>
            <a href={cancion.data.uri}>&nbsp;&nbsp;<button className="button_slide slide_down">Reproducir canción</button></a>
          </div>&nbsp;&nbsp;
        </>
      ))}
      <h2>Artistas del momento
</h2>
      <button className='button_slide slide_down' onClick={fetchArtists}>Mostrar Artistas</button>

      {modalOpen && (
        <div id="myModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <div id="artists">
              {artists.length === 0 ? <p>No artists found.</p> : artists.map((artist, index) => (
                <div key={index} className="artist-info">
                  <h3>{artist.name}</h3>
                  <p><i class="bi bi-volume-up"></i>&nbsp;<strong>Oyentes mensuales:</strong>{artist.followers.total}</p>
                  <p><i class="bi bi-file-music-fill"></i>&nbsp;<strong>Generos:</strong> {artist.genres.join(', ')}</p>
                  <p><i class="bi bi-star-fill"></i>&nbsp;<strong>Popularidad:</strong> {artist.popularity}</p>
                  <p><i class="bi bi-person-check"></i>&nbsp;<strong>Perfil:</strong> <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">{artist.uri}</a></p>
                  <img src={artist.images.length > 0 ? artist.images[0].url : ''} alt={artist.name} style={{ width: '200px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
