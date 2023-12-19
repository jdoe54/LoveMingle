# LoveMingle

Created on October 23, 2023 as a class project for CSC 337 at the University of Arizona. 

The website is a dating site used for people to avoid the texting phase of dating, by getting them into one-on-one video calls with a potential match.
Users would create an account. Then, they can start matching users that are available. If both users match each other, they are taken into a room to do the video call.
We called it a mix between Tinder and Omegle. Here is a gif of what it would look like to match between myself and another developer.
![](https://i.gyazo.com/48da73edbea4aa79acc1f1bb5895967e.gif)

I worked on the back end of the website. I created server routes using Express that would handle matches and creating an account. Data was saved into MongoDB. I used WebRTC, Socket.io, and Peer.js to form the connection between two clients for the video call.
I set up the website to host on DigitalOcean and got a domain from namecheap.com. We had to get SSL certification to allow clients to give access to their webcam and microphone settings, so the website is secured with HTTPS.

I will be adding some changes to the website over time, to fix some bugs present when the assignment was turned in on December 6, 2023.

Here is the link to the website: [LoveMingle](joinlovemingle.xyz)
