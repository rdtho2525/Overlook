const chai = require('chai');
const expect = chai.expect;
const Room = require('../src/Room');

import {
  // sampleBookings,
  sampleRooms,
  // sampleCustomers
} from './sampleData.js';

describe('Room', function() {
  let room;
  let room2;

  beforeEach(function() {
    room = new Room(sampleRooms[0]);
    room2 = new Room(sampleRooms[1]);
  });

  it('should be a function', function() {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of a Room', function() {
    expect(room).to.be.an.instanceOf(Room);
  });

  it('should have a number', function() {
    expect(room.number).to.equal(1);
  });

  it('should have a type', function() {
    expect(room.roomType).to.equal('residential suite');
  });

  it('could or could not have a bidet', function() {
    expect(room.hasBidet).to.equal(true);
    expect(room2.hasBidet).to.equal(false);
  });

  it('should have a bed size', function() {
    expect(room.bedSize).to.equal('queen');
  });

  it('should either be available or unavailable', function() {
    expect(room.isAvailable).to.equal(false);
  });

  it('should have a bed count', function() {
    expect(room.numBeds).to.equal(1);
  });

  it('should have a nightly cost', function() {
    expect(room.costPerNight).to.equal(358.40);
  });
})