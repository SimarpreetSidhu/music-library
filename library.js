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
             },
             
  printPlaylists : function() {
    for (let playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      const {id,name,tracks} = playlist;
      console.log(`${id}: ${name} - ${tracks.length} tracks`);
     
    }
  },

  printTracks : function() {
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      const {id,name,artist,album} = track;
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },

  printPlaylist : function(playlistId) {
    const playlist = this.playlists[playlistId];
    const {id,name,tracks} = playlist;
    const trackLength = tracks.length;
    console.log(`${id}: ${name} - ${trackLength} tracks`);
    
    for (let i = 0; i < trackLength; i++) {
      const trackId = tracks[i];
      const {id,name,artist,album} = library.tracks[trackId];
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },

  addTrackToPlaylist : function(trackId,playlistId) {
    const playlist = this.playlists[playlistId];
    const {tracks} = playlist;
    tracks.push(trackId);
    
  },

  generateUid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack : function(name, artist, album) {
    const trackId = this.generateUid();
    this.tracks[trackId] =  { id: trackId,
      name,
      artist,
      album};
    
  },

  addPlaylist : function(name) {

    const playlistId = this.generateUid();
    this.playlists[playlistId] = {id: playlistId, name: name, tracks: [] };
  
  },

  printSearchResults : function(query) {
    const result = [];
    for (let track in this.tracks) {
      const {id,name,artist,album} = this.tracks[track];
      if (id.search(query) !== -1 || name.search(query) !== -1 || artist.search(query) !== -1 || album.search(query) !== -1) {
        result.push(`Track Found: ${name} by ${artist} from album ${album}`);
      }
    }
    if (result.length === 0) {
      console.log(`No results found for ${query} string`);
    }
    return result;
  },
};

library.printPlaylists();
library.printTracks();
library.printPlaylist(`p01`);
library.addTrackToPlaylist("t03","p01");
library.addTrack(`Five hundred`,`Simar`,`Rockstar`);
console.log(library);
library.addPlaylist(`Random`);
console.log(library);
console.log(library.printSearchResults(`Sim`));



