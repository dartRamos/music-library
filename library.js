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
              const playlists = this.playlists; // sets playlist to library -> playlists
                     
              for (let key in playlists) { // loop through keys in playlists
                     const playlist = playlists[key]; // sets playlist to the keys of playlist (p01 & p02)
                     console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)
                      }
               
                 },
       printTracks : function() {
              const tracks = this.tracks // all same as above expect going into tracks
              
              for (let key in tracks) {
                     const track = tracks[key];
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
                     }
                 },
       printPlaylist : function(playlistId) {
              const playlists = this.playlists
              const tracks = this.tracks
                     
              if (playlists[playlistId]) { // checks if playlist exists
                     const playlist = playlists[playlistId];
                     console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)
                      
                     playlist.tracks.forEach(trackId => { // loops through tacks in playlists object turning each one into trackId
                     const track = tracks[trackId]; // sets track to library.tracks[id from trackId EXPLAIN: "t01" "t02"]
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
                      })
                     }
              },
       addTrackToPlaylist : function(trackId, playlistId) {
              const playlists = this.playlists
              
              if(playlists[playlistId]){ // checks if playlistId exists in object
                     if(this.tracks[trackId]){ // checks if trackId exist in object
                            playlists[playlistId].tracks.push(trackId); // pushes trackId into playlist that is specifed in playlistId
                            console.log(`Track "${trackId}" was add to playlist "${playlistId}"\n`)
                     }
                     }
              },
       generateUid : function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              },
       addTrack : function(name, artist, album) {
              const id = this.generateUid(); // easier way to reference the Math.floor code above
              
              this.tracks[id] = { id, name, artist, album}; // adds new track to library and specifies what info to put in.
              console.log(`Added new track ID "${id}"\n`)
              
              },
       addPlaylist : function(name) {
              const id = this.generateUid();
              
               this.playlists[id] =  { id, name, tracks: [] }; // make sure all perameters from printPlaylists are filled which is why "tracks []" was needed to give empty array
              console.log(`Added new playlist ID "${id}"\n`)
              },
     };
     
     console.log("\n********** PRITNS PLAYLISTS *******\n")

     library.printPlaylists();
     
     console.log("\n********** PRINTS TRACKS *******\n")
     
     library.printTracks();
     
     console.log("\n********** PRINTS TRACKS FOR GIVEN PLAYLIST *******\n")
     
     library.printPlaylist("p01");

     console.log("\n********** ADD TRACK TO PLAYLIST *******\n");
     
     library.addTrackToPlaylist("t03", "p01");
     library.printPlaylist("p01")

     console.log("\n********** ADD TRACK TO LIBRARY *******\n");
     
     library.addTrack("New Name", "New Artist", "New Album");
     
     library.printTracks();
     
     console.log("\n********** ADD PLAYLIST TO LIBRARY *******\n");
     
     library.addPlaylist("New Name");
     
     library.printPlaylists();