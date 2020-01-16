# Inernational Space Station Live Tracker
For our project we created a website that displays sighting opportunities of the International Space Station (ISS) in cities near where we live. Additionally, created a live tracker that shows where the ISS is at any given moment around the world, and allows for the users interactively explore the map

Live Tracker:
We utilized the Fetch() API function to get the ISS lat/lon data into html directly. The data was fetched from an open API that contained more data than we needed. We had write code specify extracting the lat/lon data for plotting. Consideration had to be made due to the API having a refresh rate restriction of 1 second. The acquired lat/lon were plotted on a map using Leaflet. The life ISS marker was put on the map utilizing Leaflet Marker function, which was fed the live lat/lon data.
                                            
Live Data and Time:
We used Moment.js, a free and open source JavaScript library, to import a JavaScript date object directly into our html. For the live time we used JavaScript Data () to return a live clock instance of a single moment in time in a platform-independent format.
