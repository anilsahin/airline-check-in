# Airline Check In Application - Challenge
The time of the initial commit which is 29th January 23:34 CET is the state of my progress within the given time for this challenge.

## Progress

### System Design
- System design together with necessary UML Diagrams and a written System Summary are completed and can be found in [System Overview](https://github.com/anilsahin/airline-check-in/blob/master/SystemOverview.md) file in the code repository.

### System Implementation
#### Data Model
- Schemas for CheckInService and SeatAvailabilityService are implemented with Mongoose for MongoDB.
- Separate MongoDB databases for each service were deployed on local machine with their respective schemas.

#### REST API
- For both CheckInService and SeatAvailabilityService a REST API is implemented using Node.js and Express.js which enable basic GET, POST, PUT, DELETE methods to interface with their data models.

#### Client REST API
- Not much an API but rather only one basic method that requests to hold a seat from the SeatAvailabilityService is implemented in the given time.

#### Testing
- No specific tests have been implemented in the given time.
- The system behavior was observed using POSTMAN during development.

## Running Locally

These initial instructions are explained for seatAvailability and apply also for AirlineCheckIn.

Run `npm install` in directory seatAvailability to install packages declared in packages.js.

Create a directory called `"data"` in seatAvailability and run `mongod --port <portnumber> --dbpath=data`.
This will start a MongoDB server running in the given port number.

Run `node server.js` to start SeatAvailabilityService. The server is configured to connect to MongoDB on `port 27018` and runs on `port 8081`. The MongoDB server for AirlineCheckIn is configured to `port 27017` and the Node server runs on `port 8080`.
