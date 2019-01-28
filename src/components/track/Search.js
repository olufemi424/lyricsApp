import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTrack } from "../../store/actions/trackActions";

class Search extends Component {
  state = {
    track_title: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchTrack(this.state.track_title);
  };

  render() {
    return (
      <div className="search card card-body my-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music" /> Search For A Song
        </h1>
        <h2 className="text-center py-4">Get the lyrics for any track</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Song title"
                name="track_title"
                value={this.state.track_title}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn text-light btn-block btn-lg">
                Get Track Lyrics
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchTrack: trackName => dispatch(searchTrack(trackName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
