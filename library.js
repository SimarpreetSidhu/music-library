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
const playlists = library.playlists;
const tracks = library.tracks;


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function(object) {
  for (let playlistId in object) {
    const playlist = object[playlistId];
    const {id,name,tracks} = playlist;
    console.log(`${id}: ${name} - ${tracks.length} tracks`);
   
  }
};
printPlaylists(library.playlists);


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(object) {
  for (let trackId in object) {
    const track = object[trackId];
    const {id,name,artist,album} = track;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
};

printTracks(library.tracks);


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = playlists[playlistId];
  const {id,name,tracks} = playlist;
  const trackLength = tracks.length;
  console.log(`${id}: ${name} - ${trackLength} tracks`);
  
  for (let i = 0; i < trackLength; i++) {
    const trackId = tracks[i];
    const {id,name,artist,album} = library.tracks[trackId];
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
  
  
};
printPlaylist(`p01`);


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId,playlistId) {
  const playlist = playlists[playlistId];
  const {tracks} = playlist;
  tracks.push(trackId);
  
};
addTrackToPlaylist("t03","p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const trackId = generateUid();
  library.tracks[trackId] =  { id: trackId,
    name,
    artist,
    album};
  
};

addTrack(`Five hundred`,`Simar`,`Rockstar`);
console.log(library);


// adds a playlist to the library
const addPlaylist = function(name) {

  const playlistId = generateUid();
  library.playlists[playlistId] = {id: playlistId, name: name, tracks: [] };

};
addPlaylist(`Random`);
console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  const result = [];
  for (let track in library.tracks) {
    const {id,name,artist,album} = library.tracks[track];
    if (id.search(query) !== -1 || name.search(query) !== -1 || artist.search(query) !== -1 || album.search(query) !== -1) {
      result.push(`Track Found: ${name} by ${artist} from album ${album}`);
    }
  }
  if (result.length === 0) {
    console.log(`No results found for ${query} string`);
  }
  return result;

};
console.log(printSearchResults(`Sim`));
