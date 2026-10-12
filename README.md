# WEB103 Project 3 - Anime District

Submitted by: **Tabitha Sulaiman**

About this web app: **Anime District is a virtual anime community where users can explore different locations and view events happening at each location. The app uses a React frontend, an Express API, and a PostgreSQL database hosted on Render.**

Time spent: **1.9 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **The walkthrough includes a view of the Render dashboard demonstrating that the Postgres database is available**
  - [x] **The walkthrough includes a demonstration of the table contents using `SELECT * FROM events;`**
- [x] **The web app displays a title**
- [x] **Website includes a visual interface that allows users to select a location they would like to view**
- [x] **Each location has a detail page with its own unique URL**
- [x] **Clicking on a location navigates to its corresponding detail page and displays all events from the events table associated with that location**

## Locations

- Ushuzio Village
- Naruto Cafe
- Jinchiruki Coast
- Uchiha Hours

## Optional Features

The following **optional** features are implemented:

- [ ] An additional page shows all possible events
  - [ ] Users can sort or filter events by location
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed

## Additional Features

- [x] Responsive visual location cards
- [x] Each location retrieves its events from the API
- [x] Each location has its own unique route
- [x] Backend API provides locations and events from PostgreSQL

## Deployed App

[View Anime District](https://anime-district.onrender.com/)

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="https://www.loom.com/share/d178b0683d534c228d2515967305f747" title="Video Walkthrough" width="" alt="Video Walkthrough" />

GIF created with **loom**

## Notes

One challenge was configuring the local and production PostgreSQL connections because Render uses different internal and external database hostnames.

## License

Copyright 2026 Tabitha Sulaiman

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at:

> http://www.apache.org/licenses/LICENSE-2.0