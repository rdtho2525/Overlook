class Hotel {
  constructor(roomData) {
    this.availableRooms = roomData;
  }

  filterRoomsByType(type) {
    return this.availableRooms.filter(room => room.roomType === type);
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