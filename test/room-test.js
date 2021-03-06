const chai = require('chai');
const expect = chai.expect;
const Room = require('../src/Room');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Room', function() {
  let room;

  beforeEach(function() {
    room = new Room();
  });

  it.skip('should be a function', function() {
    expect(Room).to.be.a('function');
  });

  it.skip('should be an instance of a Room', function() {
    expect(room).to.be.an.instanceOf(Room);
  });

  it.skip('should have a number', function() {
    expect(room.number).to.equal(917);
  });

  it.skip('should have a type', function() {
    expect(room.roomType).to.equal('');
  });

  it.skip('could or could not have a bidet', function() {
    expect(room.hasBidet).to.equal(true);
    expect(room2.hasBidet).to.equal(false);
  });

  it.skip('should have a bed size', function() {
    expect(room.bedSize).to.equal();
  });

  it.skip('should either be available or unavailable', function() {
    expect(room.isAvailable).to.equal(false);
    expect(room.isAvailable).to.equal(true);
  });

  it.skip('should have a bed count', function() {
    expect(room.numBeds).to.equal();
  });

  it.skip('should have a nightly cost', function() {
    expect(room.costPerNight).to.equal();
  });
})