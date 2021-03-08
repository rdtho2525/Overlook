import './css/base.scss';
// import './css/style.scss';

const dollarsSpent = document.getElementById('dollarsSpent');
const customerName = document.getElementById('customerName');
const searchBar = document.getElementById('searchBar');
const dateRangeButton = document.getElementById('dateRangeButton');
const roomTypeButton = document.getElementById('roomTypeButton');
const bookingsButton = document.getElementById('bookingsButton');
const fromDate = document.getElementById('fromDate');
const toDate = document.getElementById('toDate');
const residentialButton = document.getElementById('residentialButton');
const suiteButton = document.getElementById('suiteButton');
const juniorButton = document.getElementById('juniorButton');
const singleRoomButton = document.getElementById('singleRoomButton');
const pastBookings = document.getElementById('pastBookings');
const sectionHeader = document.getElementById('sectionHeader');
const roomSection = document.getElementById('roomSection');
const roomCard = document.getElementById('roomCard');
const roomImage = document.getElementById('roomImage');
const roomNumber = document.getElementById('roomNumber');
const roomType = document.getElementById('roomType');
const bedNum = document.getElementById('bedNum');
const availabilityStatus = document.getElementById('availabilityStatus');

import Customer from './Customer';
import Booking from './Booking';
import Hotel from './Hotel';
import Room from './Room';

// const currentCustomer = new Customer();
// const hotel = new Hotel();

const openDashboard = (roomData) {
  populateRoomSection(roomData);
}

const populateRoomSection = (roomData) => {
  return roomData.forEach(room => {
    roomSection.innerHTML += `
  <article id="roomCard" class="room-card">
    // <div class="room-image">
    //   <img id="roomImage" src="" alt="">
    <!-- img id="priceTag" src="" alt=""> -->
    // </div>
    <div class="room-details">
      <img id="" class="booking-icon" src="" alt="Book Room Icon">
      <p id="roomNumber">${room.number}</p>
      <p id="roomType">${room.roomType}</p>
      <p id="bedNum">${room.numBeds}</p>
      <p id="availabilityStatus">Status: Available</p>
    </div>
  </article>`
  });
}

const populateBookingsSection = (bookingData) => {
  return bookingData.forEach(booking => {
    roomSection.innerHTML += `<article id="roomCard" class="room-card">
    // <div class="room-image">
    //   <img id="roomImage" src="" alt="">
    <!-- img id="priceTag" src="" alt=""> -->
    // </div>
    <div class="room-details">
      <img id="" class="booking-icon" src="" alt="Book Room Icon">
      <p id="guestID">${booking.userID}</p>
      <p id="bookingRoom">${booking.roomNumber}</p>
      <!--<p id=""></p>-->
      <p id="availabilityStatus">Status: Available</p>
    </div>
  </article>`
  });
}


const fetchCustomers = fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .catch(err => console.log(err));

// const fetchSingleCustomer = fetch('http://localhost:3001/api/v1/customers/<id> where<id> will be a number of a customer’s id')
//   .then();
//   .catch(err => displayErrorMessage(err));

const fetchBookings = fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .catch(err => displayErrorMessage(err));

const fetchRooms = fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .catch(err => displayErrorMessage(err));

Promise.all([fetchCustomers, fetchBookings, fetchRooms])
  .then(values => console.log(values));