const chai = require('chai');
const expect = chai.expect;
const Hotel = require('../src/Hotel');

import {
  sampleRooms,
  sampleBookings
} from './sampleData.js';

describe('Hotel', function() {
  let hotel;
  let newRoom;

  beforeEach(function() {
    hotel = new Hotel();
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

  it('should be hold a list of rooms', function() {
    expect(hotel.availableRooms).to.eql([]);
  });

  it('should display only rooms that are available', function() {
    hotel.checkRoomAvailability(sampleRooms, sampleBookings, '2020/02/16');
    expect(hotel.availableRooms).to.eql([
      {
        "number": 1,
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      },
      {
        "number": 2,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      },
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
      },
      {
        "number": 6,
        "roomType": "junior suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 397.02
      }
    ])
  })

  it('should be able to filter rooms by type', function() {
    hotel.availableRooms = sampleRooms;
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
      },
      {
        "number": 7,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 2,
        "costPerNight": 231.46
      }
    ]);
  });

  it.skip('should inform customer of the selected room\'s status', function() {
    expect(hotel.displayAvailabilityStatus(sampleRooms[5])).to.equal('Wonderful selection - room 6 will be ready for you!');
    expect(hotel.displayAvailabilityStatus(newRoom)).to.equal('We\'re sorry, room 7 is unavailable.  Please refine your search.');
  });
})