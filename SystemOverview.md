# System Overview: Airline Check In

This is an application for a passenger to check-in to a seat for a given flight. The given requirements are as follows:

- The check-in application lists seats in the plane that passengers can choose
- Different seats should have different fees (free, window, aisle, more leg-room, etc.)
- A passenger can skip choosing a seat and check-in for free
- A passenger can pick a seat and check-in for a fixed price
- A passenger can only check-in to one seat
- The seat is reserved for 3 minutes for the passenger until they pay

## System Design

A microservices architecture approach is used for designing the system. The system is made of three main aggregates that each form a microservice on its own.
- Check In Service
- Seat Availability Service
- Payment Service

#### Check In Service
CheckInService encapsulates passenger information such as an identifier, payment information, a flag to indicate whether the passenger has checked in or not and a check in manager that provides functionality such as getting list of seats, choosing a seat or skipping to choose a seat.

#### Seat Availability Service
Seat Availability Service encapsulates information of Seating and their configuration in a given airplane. A Seat Availability Manager handles operations such as retrieving available seats, holding/releasing a seat and requesting a payment if needed.

#### Payment Service
Payment Service is made up of a payment manager which handles the payment operations.

### REST API
Each of these aggregates make use of a REST API that serves as their interface and also an REST API Gateway for communication between the clients and the microservices.

### Transactions
Distributed Transactions are handled in order not to require mechanisms such as two-phase commit, but rather as individual transactions that can proceed independently.

### Component Diagram

![alt text](https://github.com/anilsahin/airline-check-in/blob/master/airlinecheckin_classdiagram.png "Component Diagram")

### Class Diagram

![alt text](https://github.com/anilsahin/airline-check-in/blob/master/airlinecheckin_component.png "Class Diagram")

### Sequence Diagram

![alt text](https://github.com/anilsahin/airline-check-in/blob/master/airlinecheckin_sequence.png "Sequence Diagram")
