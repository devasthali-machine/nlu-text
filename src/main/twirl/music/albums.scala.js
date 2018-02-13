@import music.Album
@import java.time.LocalDateTime
@import java.time.format.DateTimeFormatter

@(albums: Seq[Album])

{
  "displayData": "You have @albums.size albums available from band @albums.head.artist; see the cards below",
  "albums" : [
    @for(index <- albums.indices) {
        {
            "artist": "@albums(index).artist.toUpperCase",
            "album" : "@albums(index).album",
            "releasedOn": @formatDate(albums(index))
        }
        @if(index < albums.length - 1) { , }
    }
  ]
}

@formatDate(date: Album) = @{
  if (date.releasedOn.nonEmpty) LocalDateTime.parse(date.releasedOn).format(DateTimeFormatter.ofPattern("MM/DD/YYYY"))
  else ""
}
