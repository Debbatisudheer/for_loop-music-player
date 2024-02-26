var playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
var currentSongIndex = 0;
var isPlaying = false;

function displayPlaylist() {
    var playlistDiv = document.getElementById("playlist");
    playlistDiv.innerHTML = "<h3>Current Playlist:</h3>";
    for (var i = 0; i < playlist.length; i++) {
        playlistDiv.innerHTML += "<p onclick='playSelectedSong(event)'>" + (i + 1) + ". " + playlist[i] + "</p>";
    }
}

function play() {
    isPlaying = true;
    playSong();
}

function playSong() {
    if (isPlaying && currentSongIndex < playlist.length) {
        var currentSong = playlist[currentSongIndex];
        console.log("Now playing: " + currentSong);
        currentSongIndex++;
        setTimeout(playSong, 2000); // Simulated song duration: 2 seconds
    } else {
        console.log("Playlist finished");
        currentSongIndex = 0; // Reset current song index
    }
}

function pause() {
    isPlaying = false;
    console.log("Playback paused");
}

function skip() {
    if (currentSongIndex < playlist.length) {
        console.log("Skipping to the next song: " + playlist[currentSongIndex]);
        currentSongIndex++;
    } else {
        console.log("End of playlist reached");
    }
}

function shuffle() {
    for (var i = playlist.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
    displayPlaylist();
}

function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase().replace(/\s/g, "");
    var filteredPlaylist = [];
    for (var i = 0; i < playlist.length; i++) {
        var formattedSong = playlist[i].toLowerCase().replace(/\s/g, "");
        if (formattedSong.includes(searchTerm)) {
            filteredPlaylist.push(playlist[i]);
        }
    }
    displayFilteredPlaylist(filteredPlaylist);
}

function displayFilteredPlaylist(filteredPlaylist) {
    var playlistDiv = document.getElementById("playlist");
    playlistDiv.innerHTML = "<h3>Search Results:</h3>";
    if (filteredPlaylist.length === 0) {
        playlistDiv.innerHTML += "<p>No matching songs found</p>";
    } else {
        for (var i = 0; i < filteredPlaylist.length; i++) {
            playlistDiv.innerHTML += "<p onclick='playSelectedSong(event)'>" + filteredPlaylist[i] + "</p>";
        }
    }
}

// Function to play the selected song when clicked
function playSelectedSong(event) {
    var songIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
    currentSongIndex = songIndex;
    play();
}
function addSongs() {
    var fileInput = document.getElementById("fileInput");
    var files = fileInput.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        playlist.push(file.name);
    }
    displayPlaylist(); // Update the playlist display after adding songs
}


// Display the playlist when the page loads
window.onload = displayPlaylist;