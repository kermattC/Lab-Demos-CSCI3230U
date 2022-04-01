Lab demos for CSCI 3230U

# API Call Branch

This demo shows how to create perform an fetch call to get json data from a local json file and by using an api

## API Key is needed
Remember to get your api key (mentioned in the lab instructions). You'll need to uncomment line 5 in showtimes.js and replace the value with your api key as a string. That will be the key to fetching the movie data.

## A local server is needed
Similar to the Ajax call lab, you'll need to start a local server for this code to run. The code below is how to start a local python server. You can also use node as well.

1) Open a console in your working directory and type:

```
python -m http.server 8000
```
or if you're using Python 3:
```
python3 -m http.server 8000
``` 
You can use a different port if you like. After, go on your browser and type in "localhost:8000" to access your server and you should be able to see the files there. Click on your html file and you'll find your webpage

 
