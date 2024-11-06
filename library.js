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

console.log("\n********** PRITNS PLAYLISTS *******\n")

const printPlaylists = function() {
       const playlists = library.playlists; // sets playlist to library -> playlists
       
       for (let key in playlists) { // loop through keys in playlists
              const playlist = playlists[key]; // sets playlist to the keys of playlist (p01 & p02)
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)
       }
 
};

printPlaylists();

console.log("\n********** PRINTS TRACKS *******\n")

const printTracks = function() {
       const tracks = library.tracks // all same as above expect going into tracks

       for (let key in tracks) {
              const track = tracks[key];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
       }
};

printTracks();

console.log("\n********** PRINTS TRACKS FOR GIVEN PLAYLIST *******\n")

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlists = library.playlists
       const tracks = library.tracks
       
       if (playlists[playlistId]) { // checks if playlist exists
              const playlist = playlists[playlistId];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)
        
              playlist.tracks.forEach(trackId => { // loops through tacks in playlists object turning each one into trackId
              const track = tracks[trackId]; // sets track to library.tracks[id from trackId EXPLAIN: "t01" "t02"]
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
        })
       }
};

printPlaylist('p01');

console.log("\n********** ADD TRACK TO PLAYLIST *******\n");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       const playlists = library.playlists

       if(playlists[playlistId]){ // checks if playlistId exists in object
              if(library.tracks[trackId]){ // checks if trackId exist in object
                     playlists[playlistId].tracks.push(trackId); // pushes trackId into playlist that is specifed in playlistId
                     console.log(`Track "${trackId}" was add to playlist "${playlistId}"\n`)
              }
       }
};

addTrackToPlaylist("t03", "p01")

printPlaylist("p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log("\n********** ADD TRACK TO LIBRARY *******\n");

// adds a track to the library
const addTrack = function(name, artist, album) {
       const id = generateUid(); // easier way to reference the Math.floor code above

       library.tracks[id] = { id, name, artist, album}; // adds new track to library and specifies what info to put in.
       console.log(`Added new track ID "${id}"\n`)

}

addTrack("New Name", "New Artist", "New Album");

printTracks();

console.log("\n********** ADD PLAYLIST TO LIBRARY *******\n");

// adds a playlist to the library
const addPlaylist = function(name) {
       const id = generateUid();

       library.playlists[id] =  { id, name, tracks: [] }; // make sure all perameters from printPlaylists are filled which is why "tracks []" was needed to give empty array
       console.log(`Added new playlist ID "${id}"\n`)
};

addPlaylist("New Name");

printPlaylists();


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}