class Booking {
  constructor(user, date, room) {
    this.userID = user.id;
    this.date = date;
    this.roomNumber = room.number;
    this.roomServiceCharges = [];
  }
}

module.exports = Booking;