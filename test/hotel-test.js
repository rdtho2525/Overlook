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

  beforeEach(function() {
    hotel = new Hotel();
  });

  it.skip('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it.skip('should be an instance of a Hotel', function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it.skip('should be have a list of rooms', function() {
    expect(hotel.rooms).to.eql([]);
  });

  it.skip('should be able to filter rooms by date', function() {
    expect(hotel.filterRoomsByDate('', '')).to.eql([/*list of room objs */]);
  });

  it.skip('should be able to filter rooms by type', function() {
    expect(hotel.filterRoomsByType('residential suite').to.eql([/*list of room objs */]));
  });

  it.skip('should inform customer that a room is unavailable', function() {
    expect(hotel.displayUnavailableStatues()).to.equal('We\'re sorry, room [room details] is unavailable.  Please refine your search.');
  });
})