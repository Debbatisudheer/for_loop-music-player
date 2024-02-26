class MusicPlayer:
    def __init__(self):
        self.playlist = []

    def add_song_to_playlist(self, song):
        self.playlist.append(song)

    def display_playlist(self):
        print("Current Playlist:")
        for index, song in enumerate(self.playlist, start=1):
            print(f"{index}. {song}")

    def play_playlist(self):
        print("Playing Playlist:")
        for song in self.playlist:
            # Simulating playback control
            user_input = input("Enter 'p' to pause, 's' to skip, or 'q' to quit: ")
            if user_input == 'p':
                print("Playback paused")
                break  # Exit the loop if paused
            elif user_input == 's':
                print("Skipping to the next song")
                continue  # Skip to the next song
            elif user_input == 'q':
                print("Exiting the music player")
                return  # Exit the method and stop playback
            print(f"Now playing: {song}")

    def shuffle_playlist(self):
        import random
        print("Shuffling Playlist:")
        random.shuffle(self.playlist)
        self.display_playlist()

    def skip_to_next_song(self):
        print("Skipping to the next song:")
        if self.playlist:
            print(f"Now playing: {self.playlist.pop(0)}")
        else:
            print("Playlist is empty")

# Creating a music player instance
player = MusicPlayer()

# Adding songs to the playlist
player.add_song_to_playlist("Song 1")
player.add_song_to_playlist("Song 2")
player.add_song_to_playlist("Song 3")
player.add_song_to_playlist("Song 4")
player.add_song_to_playlist("Song 5")

# Displaying the playlist
player.display_playlist()

# Playing the playlist with playback control
player.play_playlist()

# Shuffling the playlist
player.shuffle_playlist()

# Skipping to the next song
player.skip_to_next_song()