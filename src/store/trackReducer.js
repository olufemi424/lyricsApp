const initState = {
  track_list: [],
  track_lyrics: {},
  track_info: {},
  heading: "Top 10en Tracks"
};

const trackReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        ...state,
        track_list: action.payload
      };
    case "GET_LYRICS":
      return {
        ...state,
        track_lyrics: action.payload
      };
    case "GET_LYRICS_INFO":
      return {
        ...state,
        track_info: action.payload
      };
    case "GET_SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload
      };
    default:
      return state;
  }
};

export default trackReducer;
