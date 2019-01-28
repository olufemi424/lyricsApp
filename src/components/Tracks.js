import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrackList } from "../store/actions/trackActions";
import Spinner from "../components/layouts/Spinner";
import Track from "./Track";
import { Redirect } from "react-router-dom";

class Tracks extends Component {
  componentDidMount() {
    this.props.getTrackList();
  }

  render() {
    const { track_list, heading } = this.props.tracks;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    if (track_list === undefined || track_list.length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <h3 className="text-center py-4">{heading}</h3>
            <div className="row">
              {track_list.map(item => (
                <Track key={item.track.track_id} track={item.track} />
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTrackList: () => dispatch(getTrackList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
