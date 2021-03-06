const chai = require('chai');
const expect = chai.expect;
const Booking = require('../src/Booking');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Booking', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking();
  });

  it.skip('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it.skip('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it.skip('should have an ID', function() {
    expect(booking.id).to.equal(/*integer*/);
  });

  it.skip('should have a user ID', function() {
    expect(booking.userID).to.equal(/*userID*/);
  });

  it.skip('should have a date', function() {
    expect(booking.date).to.equal(/*date*/);
  });

  it.skip('should have a room number', function() {
    expect(booking.roomNumber).to.equal(/*roomNumber*/);
  });

  it.skip('should have a list of charges that apply', function() {
    expect(booking.roomServiceCharges).to.eql(/*array of charges*/);
  });
})