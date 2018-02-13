package music

import play.twirl.api.JavaScriptFormat._

case class Album(artist: String, album: String, releasedOn: String)

object AlbumProcessor {

  def process(albums: Seq[Album]): Appendable = {

    albums match {
      case Nil => music.js.albums_empty(albums)
      case _ => music.js.albums(albums)
    }

  }
}
