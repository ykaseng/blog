---
title: fly stay play
date: 2015-10-31
author: Ka Seng Yang
---

# fly stay play

[fly stay play](https://youtu.be/R8D2hyx9Dms) is a web application that acquires travel related data from multiple service providers and automatically generates heuristically optimized travel itineraries based on user preferences.

## The Pitch

fly stay play is a proof of concept web application pitched by Dr. James Montgomery and Dr. Saurabh Garg, with the aim to bring together different travel and event application programming interfaces (API) to create complete travel plans. The user is able to input a variety of preferences to customize the travel plans to their individual needs.

Once these constraints are entered, fly stay play will generate a series of travel plans for the user, which they will be able to edit so the system can further improve the plans to suit the user. The user can then save and book their travel plans, with the ability to edit the plans later, even during the trip.

## The Software

The backbone of the application is built on top of data acquired from numerous service providers including Eventful, Expedia, Factual, Google’s QPX Express and Maps. This allows fly stay play to heuristically optimize travel itineraries based on the users’ hotel, flight, event, budget and transport preferences. The heuristic optimization engine is a proprietary swap-based set-optimization algorithm developed specifically to for this application.

For fly stay play to create travel plans, the user must enter a set of dates, an origin and a destination. The application will then have the minimum amount of data required to generate an itinerary based on those constraints. Users then have the option to input additional constraints, including budget, flight preferences, transport preferences and upcoming events located near the destination.

When fly stay play returns its travel plans, users will be able to view and edit any itinerary they like. They will have the ability to "lock" down any events, activities, flight and hotels they like and reject the ones that they do not. From there, the user can then have the system regenerate a new set of itineraries based on the latest constraints.

## Extensibility

fly stay play has been constructed to be modular and scalable. As such, as many or as little new modules can be added and deleted as is needed. This means that the system has been built to be highly extensible for future development. More services can be integrated to get more data sources for the system to consume in the optimization process.

Also, due to the modularity of the system, the proprietary heuristic optimization engine can help with decisions beyond travel in the future and possibly allow for the system to make decisions in completely removed paradigms, such as finance, education, and so on.

## Non-defunct resources

* [Poster](http://www.utas.edu.au/__data/assets/pdf_file/0007/775447/FlyStayPlay.pdf)
* [Video](https://youtu.be/R8D2hyx9Dms)