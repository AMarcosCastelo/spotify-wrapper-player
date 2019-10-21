import spotify from './spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const albums = spotify.search.albums('Guns n Roses');
const albumList = document.getElementById('album-list');
const album = spotify.album.getAlbum('3I9Z1nDCL4E0cP62flcbI5');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');


albums
  .then((data) => {
    renderAlbums(data.albums.items, albumList);
    console.log(data);
  });

album
  .then((data) => renderAlbumInfo(data, albumInfo))
  .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
