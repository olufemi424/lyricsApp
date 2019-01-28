import axios from "axios";

export const getTrackList = () => {
  return dispatch => {
    //make async call to api
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(({ data }) => {
        dispatch(setTracksList(data.message.body.track_list));
      })
      .catch(err => console.log(err));
  };
};

// set state to tracks
const setTracksList = data => {
  return {
    type: "GET_TRACKS",
    payload: data
  };
};

export const getLyrics = id => {
  return dispatch => {
    //make async call to api
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(({ data }) => {
        dispatch(setLyrics(data.message.body.lyrics));
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        );
      })
      .then(({ data }) => {
        dispatch(setLyricsInfo(data.message.body.track));
      })
      .catch(err => console.log(err));
  };
};

// set state to tracks
const setLyrics = data => {
  return {
    type: "GET_LYRICS",
    payload: data
  };
};

const setLyricsInfo = data => {
  return {
    type: "GET_LYRICS_INFO",
    payload: data
  };
};
