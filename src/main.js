import spotify from './spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';
import searchEnterTrigger from './searchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum('3I9Z1nDCL4E0cP62flcbI5');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

album
  .then((data) => renderAlbumInfo(data, albumInfo))
  .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
