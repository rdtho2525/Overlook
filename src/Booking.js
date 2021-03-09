class Booking {
  constructor(bookingObj) {
    this.userID = bookingObj.userID;
    this.date = bookingObj.date;
    this.roomNumber = bookingObj.roomNumber;
    this.roomServiceCharges = [];
  }
}

module.exports = Booking;