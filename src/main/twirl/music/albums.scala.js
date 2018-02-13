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
            "releasedOn": "@albums(index).releasedOn"
        }
        @if(index < albums.length - 1) { , }
    }
  ]
}

@formatDate(date: String) = @{
  if (date.nonEmpty) LocalDateTime.parse(date).format(DateTimeFormatter.ofPattern("MM/DD/YYYY"))
  else ""
}
