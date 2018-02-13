
applying data to template
-------------------------

```
sbt run
```

case 1: non-empty data
----------------------

```json
{
  "displayData": "You have 10 albums available from band Porcupine Tree; see the cards below",
  "albums" : [

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 1",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 2",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 3",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 4",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 5",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 6",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 7",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 8",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 9",
            "releasedOn": 02\/44\/2018
        },

        {
            "artist": "PORCUPINE TREE",
            "album" : "album 10",
            "releasedOn": 02\/44\/2018
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