class Customer {
  constructor(guest, password) {
    this.name = guest.name;
    this.id = guest.id;
    this.username = `customer${this.id}`;
    this.password = password;
    this.bookings = [];
    this.pastBookings = [];
  }
}

module.exports = Customer;