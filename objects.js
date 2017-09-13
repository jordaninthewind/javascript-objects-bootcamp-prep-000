var playlist = {
  LegionOfMary: 'The Night They Drove Old Dixie Down'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName.songTitle;
  return playlist;
}