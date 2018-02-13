package music

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object Application {

  def main(args: Array[String]): Unit = {

    val albums = (1 to 10).map(x => Album("Porcupine Tree" , s"album $x", LocalDateTime.now().toString))

    println("case 1: ")
    println(AlbumProcessor.process(albums).body)

    println("case 2: ")
    println(AlbumProcessor.process(Seq.empty).body)
  }

}
