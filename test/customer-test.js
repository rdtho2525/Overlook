const chai = require('chai');
const expect = chai.expect;
const Customer = require('../src/Customer');

import {
  sampleRooms,
  sampleCustomers
} from './sampleData.js';

describe('Customer', function() {
  let rooms;
  let customer;

  beforeEach(function() {
    rooms = sampleRooms;
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

  it('should be able to book a room', function() {
    customer.bookRoom('2020/03/31', rooms[2]);
    expect(customer.bookings).to.eql([
      {
        "userID": 1,
        "date": "2020/03/31",
        "roomNumber": 3,
        "roomServiceCharges": []
      }
    ]);
  });

  it('should be able to filter bookings by date', function() {
    customer.bookRoom('2020/03/31', rooms[2]);
    customer.bookRoom('2020/02/15', rooms[1]);
    customer.bookRoom('2020/02/22', rooms[3]);
    customer.bookRoom('2020/04/03', rooms[4]);
    expect(customer.bookings).to.eql([
      {
        "userID": 1,
        "date": "2020/03/31",
        "roomNumber": 3,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/15",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/22",
        "roomNumber": 4,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/04/03",
        "roomNumber": 5,
        "roomServiceCharges": []
      }
    ])
    expect(customer.filterBookingsByDate('2020/02/01', '2020/02/28')).to.eql([
      {
        "userID": 1,
        "date": "2020/02/15",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/22",
        "roomNumber": 4,
        "roomServiceCharges": []
      }
    ]);
});

  it('should be able to cancel a booking', function() {
    customer.bookRoom('2020/03/31', rooms[2]);
    customer.bookRoom('2020/02/15', rooms[1]);
    customer.bookRoom('2020/02/22', rooms[3]);
    customer.bookRoom('2020/04/03', rooms[4]);
    
    expect(customer.bookings).to.eql([
      {
        "userID": 1,
        "date": "2020/03/31",
        "roomNumber": 3,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/15",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/22",
        "roomNumber": 4,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/04/03",
        "roomNumber": 5,
        "roomServiceCharges": []
      }
    ]);

    customer.cancelBooking('2020/03/31', 3);

    expect(customer.bookings).to.eql([
      {
        "userID": 1,
        "date": "2020/02/15",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/02/22",
        "roomNumber": 4,
        "roomServiceCharges": []
      },
      {
        "userID": 1,
        "date": "2020/04/03",
        "roomNumber": 5,
        "roomServiceCharges": []
      }
    ]);
  });

  it('should be able to calculate the total amount they\'ve spent on rooms', function() {
    customer.bookRoom('2020/02/15', rooms[1]);
    customer.bookRoom('2020/02/22', rooms[3]);
    customer.bookRoom('2020/04/03', rooms[4]);
    expect(customer.calcTotalAmount(rooms)).to.equal(1246.99)
  });
})