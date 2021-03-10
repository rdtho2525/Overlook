const chai = require('chai');
const expect = chai.expect;
const Customer = require('../src/Customer');

import {
  sampleRooms,
  sampleCustomers,
  sampleBookings
} from './sampleData.js';

describe('Customer', function() {
  let rooms;
  let customer;
  let booking1;
  let booking2;

  beforeEach(function() {
    rooms = sampleRooms;
    customer = new Customer(sampleCustomers[0], 'overlook2021');
    booking1 = sampleBookings[0];
    booking2 = sampleBookings[1];
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

  it('should retrieve all of a user\'s past bookings', function() {
    customer.getBookings(sampleBookings);
    expect(customer.bookings).to.eql([ {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2020/02/05",
      "roomNumber": 12,
      "roomServiceCharges": []
    }])
  });

  it('should hold a list of past bookings', function() {
    expect(customer.pastBookings).to.eql([]);
  });

  it('should be able to book a room', function() {
    customer.bookRoom(booking1);
    expect(customer.bookings).to.eql([
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2020/04/22",
        "roomNumber": 15,
        "roomServiceCharges": []
      }
    ]);
  });

  it('should be able to filter bookings by date', function() {
    customer.bookRoom(booking1);
    customer.bookRoom(booking2);
    expect(customer.bookings).to.eql([
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2020/04/22",
        "roomNumber": 15,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 43,
        "date": "2020/01/24",
        "roomNumber": 24,
        "roomServiceCharges": []
      }
    ])
    expect(customer.filterBookingsByDate('2020/04/01', '2020/04/28')).to.eql([
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2020/04/22",
        "roomNumber": 15,
        "roomServiceCharges": []
      }
    ]);
});

  it.skip('should be able to cancel a booking', function() {
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

  it.skip('should be able to calculate the total amount they\'ve spent on rooms', function() {
    customer.bookRoom(booking1);
    customer.bookRoom(booking2);
    expect(customer.calcTotalAmount(rooms)).to.equal(1246.99)
  });
})