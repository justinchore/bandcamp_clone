import * as AlbumUtil from '../util/album_api_util'

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM, 
    album 
})

export const receiveAlbums = albums => {
    // debugger 
    return {
    type: RECEIVE_ALBUMS,
    albums
    }
}

export const fetchArtistsAlbums = artistId => dispatch => {
    //  debugger
    return AlbumUtil.fetchArtistsAlbums(artistId)
    .then(albums => {
        // debugger
        dispatch(receiveAlbums(albums))
})}
