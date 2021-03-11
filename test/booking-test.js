const chai = require('chai');
const expect = chai.expect;
const Booking = require('../src/Booking');

import {
  sampleCustomers,
  sampleRooms,
  sampleBookings
} from './sampleData.js';

describe('Booking', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking(sampleBookings[0]);
  });

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should have a user ID', function() {
    expect(booking.userID).to.equal(9);
  });

  it('should have a date', function() {
    expect(booking.date).to.equal('2020/04/22');
  });

  it('should have a room number', function() {
    expect(booking.roomNumber).to.equal(15);
  });

  it.skip('should be able to hold a list of service charges', function() {
    expect(booking.roomServiceCharges).to.eql([]);
  });
})