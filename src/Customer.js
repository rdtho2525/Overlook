const Booking = require('./Booking');

class Customer {
  constructor(guest, password) {
    this.name = guest.name;
    this.id = guest.id;
    this.username = `customer${this.id}`;
    this.password = password;
    this.bookings = [];
    this.pastBookings = [];
  }

  bookRoom(bookingObj) {
    const booking = new Booking(bookingObj)
    this.bookings.push(booking);
  }

  filterBookingsByDate(fromDate, toDate) {
    return this.bookings.filter(booking => {
      return booking.date > fromDate && booking.date < toDate;
    });
  }

  cancelBooking(date, roomNumber) {
    this.bookings.forEach((booking, index) => {
      if (booking.date === date && booking.roomNumber === roomNumber) {
        this.bookings.splice(index, 1);
      }
    })
  }

  calcTotalAmount(roomData) {
    if (!!this.bookings.length) {
      return roomData.reduce((acc, room) => {
        this.bookings.forEach(booking => {
          if (booking.roomNumber === room.number) {
            acc += room.costPerNight;
          }
        });
        return acc;
      }, 0);
    } else {
      return Number(0).toFixed(2);
    }
  }
}

module.exports = Customer;