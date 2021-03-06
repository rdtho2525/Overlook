const chai = require('chai');
const expect = chai.expect;
const Customer = require('../src/Customer');

import {
  sampleBookings,
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Customer', function() {
  let rooms;
  let bookings;
  let futureBookings;
  let pastBookings;
  let customer;

  beforeEach(function() {
    rooms = sampleRooms;
    bookings = sampleBookings;
    futureBookings = bookings.filter(booking => booking.date > '2020/04/01');
    pastBookings = bookings.filter(booking => booking.date < '2020/04/01');
    customer = new Customer(sampleCustomers[0], 'overlook2021');
  });

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of a Customer', function() {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should have a name', function() {
    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it('should have an ID', function() {
    expect(customer.id).to.equal(1);
  });

  it('should have a username', function() {
    expect(customer.username).to.equal('customer1');
  });

  it('should have a password', function() {
    expect(customer.password).to.equal('overlook2021');
  });

  it('should hold a list of bookings', function() {
    expect(customer.bookings).to.eql([]);
  });

  it('should hold a list of past bookings', function() {
    expect(customer.pastBookings).to.eql([]);
  });

  it.skip('should be able to book a room', function() {
    customer.bookRoom(bookings[0]);
    expect(customer.bookings).to.eql(futureBookings);
  });

  it.skip('should be able to cancel a booking', function() {

  });

  it.skip('should be able to calculate the total amount they\'ve spent on rooms', function() {

  });
})