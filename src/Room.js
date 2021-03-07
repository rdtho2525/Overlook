class Room {
  constructor(roomData) {
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    this.hasBidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.isAvailable = false;
    this.numBeds = roomData.numBeds;
    this.costPerNight = roomData.costPerNight;
  }
}

module.exports = Room;