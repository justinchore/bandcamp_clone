import * as TrackUtil from '../util/track_api_util'

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
})

export const receiveTracks = tracks => {
    // debugger 
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const fetchArtistsTracks = userId => dispatch => {
    //  debugger
    return TrackUtil.fetchArtistsTracks(userId)
        .then(tracks => {
            // debugger
            dispatch(receiveTracks(tracks))
        })
}