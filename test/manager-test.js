const chai = require('chai');
const expect = chai.expect;
const Customer = require('../src/Customer');
const Manager = require('../src/Manager');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Manager', function() {
  let manager;

  beforeEach(function() {
    manager = new Manager();
  });

  it.skip('should be a function', function() {
    expect(Manager).to.be.a('function');
  });

  it.skip('should be an instance of a Manager', function() {
    expect(manager).to.be.an.instanceOf(Manager);
  });

  it.skip('should have an ID', function() {
    expect(manager.id).to.equal(1);
  });

  it.skip('should be have a username', function() {
    expect(manager.username).to.equal(manager1);
  });

  it.skip('should have a password', function() {
    expect(manager.password).to.equal('overlook2021');
  });

  it.skip('should have a list of customers', function() {
    expect(manager.customers).to.equal([]);
  });

  it.skip('should be able to calculate the day\'s total revenue', function() {
    expect(manager.calcDaysTotalRevenue()).to.equal(/*integer*/);
  });

  it.skip('should be able to calculate the percentage of occupied rooms', function() {
    expect(manager.calcOccupancy()).to.equal(/*float*/);
  });

  it.skip('should have a access to all guest bookings', function() {
    expect(manager.users[0].bookings).to.eql([]);
  })

  it.skip('should be able to book a room for a guest', function() {
    manager.bookGuestRoom(/*guest name*/)
    expect(manager.customers[0].bookings.pop()).to.eql([/*room obj*/]);
  });

  it.skip('should be able to cancel a guest booking', function() {
    manager.cancelGuestBooking(/*guest name*/);
    expect(manager.customers[0].bookings).to.not.include(/*room obj*/)
  });
});