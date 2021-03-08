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

  bookRoom(date, room) {
    const booking = new Booking(this, date, room)
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
    return roomData.reduce((acc, room) => {
      this.bookings.forEach(booking => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight;
        }
      });
      return acc;
    }, 0);
  }
}

module.exports = Customer;