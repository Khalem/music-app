# React Music App

## About
This is a music application made using React and Spotify's API. I made this to continue my experience working with React while also having some fun using Spotify's API. 

## Using Spotify's API
Using Spotify's API was kind of tricky. As this was the first API where an API token was required. The API token would also expire after 60 minutes, so I decided to just create a new token each time the component was mounted. I will probably go back to use a bit of logic to check if the token has expired instead, so I'm not making too many requests. 

Although I was making a preflight request with the correct headers, I was still recieving cors errors, so I decided to use a proxy to avoid this error. In the future I would like to find a way to correct this error.

## Using React
I used React to create components which included the music tiles, artist info and related artists. I would've liked to have used more of Spotify's API with react but I think I would need something to handle a larger application so the code wouldn't be full of ternarys.

## Deployment
I deployed the site on Github Pages which can be viewed [here!](https://khalem.github.io/music-app/)
