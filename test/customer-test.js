const chai = require('chai');
const expect = chai.expect;
const Customer = require('../src/Customer');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Customer', function() {

  beforeEach(function() {
    const bookings = sampleBookings;
    const rooms = sampleRooms;
    const customer = new Customer(sampleCustomers[0]);
  });

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of a Customer', function() {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it.skip('should have a name', function() {
    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it.skip('should have an ID', function() {
    expect(customer.id).to.equal(1);
  });

  it.skip('should have a username', function() {
    expect(customer.username).to.equal();
  });

  it.skip('should have a password', function() {
    expect(customer.password).to.equal();
  });

  it.skip('should track the total amount they\'ve spent on rooms', function() {
    expect(customer.amountSpent).to.equal();
  });

  it.skip('should have a list of bookings', function() {
    expect(customer.bookings).to.eql(bookings);
  });

  it.skip('should have a list of past bookings', function() {
    expect(customer.pastBookings).to.eql([]);
  });

  it.skip('should be able to book a room', function() {

  });

  it.skip('should be able to cancel a booking', function() {

  });

  it.skip('should be able to calculate the total amount they\'ve spent on rooms', function() {

  });
})