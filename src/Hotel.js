class Hotel {
  constructor() {
    this.availableRooms = [];
  }

  filterRoomsByType(type) {
    return this.availableRooms.filter(room => room.roomType === type);
  }

  checkRoomAvailability(roomData, bookingObj, date) {
    const currentBookings = bookingObj.filter(booking => booking.date === date).map(booking => booking.roomNumber);
    this.availableRooms = roomData.filter(room => !currentBookings.includes(room.number));
  }

  displayAvailabilityStatus(selectedRoom) {
    let message;
    this.availableRooms.forEach(room => {
      if (room.number === selectedRoom.number) {
        message = `Wonderful selection - room ${selectedRoom.number} will be ready for you!`;
      } else {
        message = `We\'re sorry, room ${selectedRoom.number} is unavailable.  Please refine your search.`
      }
    });
    return message;
  }
}

module.exports = Hotel;