// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
album.tracks.forEach(song => {
    url = `${BASE_URL}${album.artist}/${song}`
    songList.innerHTML += `
    <li class="nav-item">
        <a class="nav-link" href="#">${song}</a>
    </li>
    `
});
songList.addEventListener('click',function(event){
    url = `${BASE_URL}${album.artist}/${event.target.innerText}`
    axios
        .get(url)
        .then(function(response){
            lyricsPanel.innerHTML = `<h3>${event.target.innerText}</h3>
            <hr>
            <pre>${response.data.lyrics}</pre>`
        })
        .catch(function(error){
            console.log(error)
        })
})
songList.addEventListener('mouseover',function(event){
    event.target.setAttribute('class','nav-link active')
})
songList.addEventListener('mouseout',function(event){
    event.target.setAttribute('class','nav-link')
})

