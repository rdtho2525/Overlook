const chai = require('chai');
const expect = chai.expect;

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

})