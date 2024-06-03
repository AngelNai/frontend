document.addEventListener('DOMContentLoaded', () => {
    const artistIds = '7rkW85dBwwrJtlHRDkJDAC,3TVXtAsR1Inumwj472S9r4,7dGJo4pcD2V6oG8kP0tJRR,5H4yInM5zmHqpKIoMNAx4r,1Xyo4u8uXC1ZmMpatF05PJ,0eDvMgVFoNV3TpwtrVCoTj,6eUKZXaKkcviH0Ku9w2n3V,1uNFoZAHBGtllmzznpCI3s,5K4W6rqBFWDnAN6FQUkS6x,0iEtIxbK0KxaSlF7G42ZOp';
    const url = `https://spotify23.p.rapidapi.com/artists/?ids=${artistIds}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8e6ebfb3cmshceeab2ab980eac2p15b1e5jsn3a5a6439ec8d',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];
    const artistsDiv = document.getElementById("artists");

    btn.onclick = async function() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log('Fetched result:', result); // Verificar los datos en la consola
            displayArtists(result);
            modal.style.display = "block";
        } catch (error) {
            console.error('Error fetching the artists:', error);
        }
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    function displayArtists(data) {
        artistsDiv.innerHTML = ''; // Clear previous data
        if (!data.artists || data.artists.length === 0) {
            artistsDiv.innerHTML = '<p>No artists found.</p>';
            return;
        }

        data.artists.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.innerHTML = `
                <h3>${artist.name}</h3>
                <p><strong>ID:</strong> ${artist.id}</p>
                <p><strong>Followers:</strong> ${artist.followers.total}</p>
                <p><strong>Genres:</strong> ${artist.genres.join(', ')}</p>
                <p><strong>Popularity:</strong> ${artist.popularity}</p>
                <p><strong>Type:</strong> ${artist.type}</p>
                <p><strong>URI:</strong> <a href="${artist.external_urls.spotify}" target="_blank">${artist.uri}</a></p>
                <img src="${artist.images.length > 0 ? artist.images[0].url : ''}" alt="${artist.name}" style="width:200px;">
            `;
            artistsDiv.appendChild(artistElement);
        });
    }
});
