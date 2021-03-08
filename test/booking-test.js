const chai = require('chai');
const expect = chai.expect;
const Booking = require('../src/Booking');

import {
  sampleCustomers,
  sampleRooms
} from './sampleData.js';

describe('Booking', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking(sampleCustomers[1], '2020/04/15', sampleRooms[4]);
  });

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should have a user ID', function() {
    expect(booking.userID).to.equal(2);
  });

  it('should have a date', function() {
    expect(booking.date).to.equal('2020/04/15');
  });

  it('should have a room number', function() {
    expect(booking.roomNumber).to.equal(5);
  });

  it('should be able to hold a list of service charges', function() {
    expect(booking.roomServiceCharges).to.eql([]);
  });
})