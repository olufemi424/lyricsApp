import React, { Component } from "react";
import Spinner from "../components/layouts/Spinner";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link, Redirect } from "react-router-dom";

import { getLyrics } from "../store/actions/trackActions";

class Lyrics extends Component {
  componentDidMount() {
    this.props.getLyrics(this.props.trackId);
  }

  render() {
    const { track_lyrics, track_info } = this.props.tracks.tracks;
    const track = track_info;
    const lyrics = track_lyrics;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <Link to="/" className="btn btn-dark btn-sm my-4">
              {" "}
              Go Back
            </Link>
            <div className="card">
              <div className="card-header">
                <h5>
                  {track.track_name} by {track.artist_name}
                </h5>
                <h4>
                  <strong>Album</strong> : {track.album_name}
                </h4>
              </div>
              <div className="card-body">{lyrics.lyrics_body}</div>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID</strong> : {track.album_id}
              </li>
              <li className="list-group-item">
                <strong>Song Genre</strong> :{" "}
                {
                  track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                }
              </li>
              <li className="list-group-item">
                <strong>Explicit Words</strong> :{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item">
                <strong>Release Date</strong> :{" "}
                <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
              </li>
              <li className="list-group-item">
                <strong>Share</strong> :{" "}
                <a href={track.track_share_url}>
                  {track.track_name} by {track.artist_name}
                </a>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tracks: state,
    trackId: ownProps.match.params.id,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLyrics: id => dispatch(getLyrics(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lyrics);
