## Console apps with node.js

Console apps with node js related to Udemy course.



Before starting each project, remind execute the command ``` npm install ``` for load packages needed

1. Simple ToDo List app using json file to store data.

    ## Examples:

        There are 4 methods:

        node app list  
        node app create "Task name"
        node app update "Task name" -c true
        node app remove "Task name"
   

2. Weather app to get the temperature of a location using axios package for HTTP requests

used API's:

https://rapidapi.com/dev132/api/city-geo-location-lookup 

To obtain latitude and longitude by a search term introduced in the console. 


https://openweathermap.org/

To obtain complete weather information sending latitude and longitude as query parameters.

    ## Example of use:

    node app -a "Caracas"

    or 

    node app -address "Caracas"
