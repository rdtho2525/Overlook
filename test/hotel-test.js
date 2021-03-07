const chai = require('chai');
const expect = chai.expect;
const Hotel = require('../src/Hotel');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Hotel', function() {
  let hotel;
  let newRoom;

  beforeEach(function() {
    hotel = new Hotel(sampleRooms);
    newRoom = {
      "number": 7,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 400.00
    }
  });

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of a Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should be have a list of rooms', function() {
    expect(hotel.availableRooms).to.eql(sampleRooms);
  });

  it('should be able to filter rooms by type', function() {
    expect(hotel.filterRoomsByType('single room')).to.eql([
      {
        "number": 3,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 1,
        "costPerNight": 491.14
      },
      {
        "number": 4,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 429.44
      },
      {
        "number": 5,
        "roomType": "single room",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 2,
        "costPerNight": 340.17
      }
    ]);
  });

  it('should inform customer of the selected room\'s status', function() {
    expect(hotel.displayAvailabilityStatus(sampleRooms[5])).to.equal('Wonderful selection - room 6 will be ready for you!');
    expect(hotel.displayAvailabilityStatus(newRoom)).to.equal('We\'re sorry, room 7 is unavailable.  Please refine your search.');
  });
})