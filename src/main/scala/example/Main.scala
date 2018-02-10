package example

case class Album(name: String)

object Main {
  def main(args: Array[String]): Unit = {

    val albums = (1 to 10).map(x => Album(s"Album $x"))

    val output = example.html.hello(albums)

    println(output)
  }
}
