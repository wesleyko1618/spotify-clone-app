import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  // how to access the data layer (state provider), dispatch is what changes the data layer
  const [{ token }, dispatch] = useStateValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      // do this instead of doing setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      
      // Giving access token to Spotify API
      spotify.setAccessToken(_token);

      // getMe returns back the user
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => { 
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      
      spotify.getPlaylist("37i9dQZEVXcL3ZWh2XAUBt").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
      })
    );
    }
  }, []);

  return (
    <div className="app">
      {
        token ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
