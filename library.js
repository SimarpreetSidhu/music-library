const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let playlists = library.playlists;
  for (let playlist in playlists) {
    let playlistName = playlists[playlist].name;
    let playListTracksLength = playlists[playlist].tracks.length;
    console.log(`${playlist}: ${playlistName} - ${playListTracksLength} tracks`);
  }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let tracks = library.tracks;
  for (let track in tracks) {
    let trackName = tracks[track].name;
    let artistName = tracks[track].artist;
    let albumName = tracks[track].album;
    console.log(`${track}: ${trackName} by ${artistName} (${albumName})`);
  }
};

printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlists = library.playlists;
  let tracks = library.tracks;
  for (let playlist in playlists) {
    let playlistName = playlists[playlist].name;
    let playListTracks = playlists[playlist]["tracks"];
    let playListTracksLength = playlists[playlist].tracks.length;

    if (playlist === playlistId) {
      
      console.log(`${playlist}: ${playlistName} - ${playListTracksLength} tracks`);

      for (let i = 0; i < playListTracks.length; i++) {
        let trackName = tracks[playListTracks[i]].name;
        let artistName = tracks[playListTracks[i]].artist;
        let albumName = tracks[playListTracks[i]].album;
        console.log(`${playListTracks[i]}: ${trackName} by ${artistName} (${albumName})`);
      }
    }
  }
};
printPlaylist(`p01`);


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId,playlistId) {
  let playlists = library.playlists;

  for (let playlist in playlists) {
    let playListTracks = playlists[playlist]["tracks"];
    if (playlist === playlistId) {
      playListTracks.push(trackId);
    }
  }
};
addTrackToPlaylist("t03","p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let trackId = generateUid();
  library.tracks = { [trackId]: { id: `${trackId}`,
    name: name,
    artist: artist,
    album: album }
  };
};

addTrack(`Five hundred`,`Simar`,`Rockstar`);
console.log(library);


// adds a playlist to the library
const addPlaylist = function(name) {

  let playlistId = generateUid();
  library.tracks = {
    [playlistId]: { id: `${playlistId}`, name: name, tracks: [] }
  
  };

};
addPlaylist(`Random`);
console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};
