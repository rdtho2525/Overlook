class Booking {
  constructor(user, date, roomNumber) {
    this.userID = user.id;
    this.date = date;
    this.roomNumber = roomNumber;
    this.roomServiceCharges = [];
  }
}

module.exports = Booking;