
applying data to template
-------------------------

```
sbt run
```

case 1: non-empty data
----------------------

```json
{
  "displayData": "You have 10 albums available from band Porcupine Tree",
  "albums": [
    {
      "artist": "PORCUPINE TREE",
      "album": "album 1"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 2"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 3"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 4"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 5"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 6"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 7"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 8"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 9"
    },
    {
      "artist": "PORCUPINE TREE",
      "album": "album 10"
    }
  ]
}
```

case 2: empty data
------------------

```json
{
  "displayData": "There are no albums available.",
  "albums" : []
}
```