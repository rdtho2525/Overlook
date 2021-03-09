import './css/base.scss';
import './images/pexels-konstantinos-eleftheriadis-2034335.jpg'
import './images/avatar.svg'
import './images/noun_booking_1094614.svg'
import './images/logo2.png'
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
const modalContainer = document.getElementById('modalContainer');
const formFromDate = document.getElementById('formFromDate');
const formToDate = document.getElementById('formToDate')

import Customer from './Customer';
import Booking from './Booking';
import Hotel from './Hotel';
import Room from './Room';

// const currentCustomer = new Customer();
// const hotel = new Hotel();

const openDashboard = (roomData, guest) => {
  populateRoomSection(roomData);
  getGuestsTotalAmount(guest, roomData);
  displayUserName(guest);
}

// const capitalize = word => {
//   const splitWords = word.split(' ');
//   splitWords.forEach(word => {
//     word = word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return splitWords.join(' ');
// }

const populateRoomSection = (roomData) => {
  const allRooms = roomData.rooms.map(room => {
   return `<article class="room-card">
      <div class="room-image">
        <img id="roomImage" src="" alt="">
        <!-- <img id="priceTag" src="" alt="">   -->
      </div>
      <div class="room-details">
        <button class="icon-container">
          <img id="" class="booking-icon click" src="./images/noun_booking_1094614.svg" alt="Book Room Icon">
        </button>
        <div class="room-info">
          <p id="roomNumber">Room number: ${room.number}</p>
          <p id="roomType">Type: ${room.roomType}</p>
          <p id="bedNum">Bed count: ${room.numBeds}</p>
          <p id="availabilityStatus">Status: Available</p>
        </div>
      </div>
    </article>`
  });
  roomSection.innerHTML = allRooms.join('');
}

const populateBookingsSection = (bookingData) => {
  const allBookings =  bookingData.map(booking => {
  `<article class="room-card hidden">
      <div class="room-image">
        <img id="roomImage" src="" alt="">
        <!-- <img id="priceTag" src="" alt="">   -->
      </div>
      <div class="room-details">
        <img id="" class="booking-icon" src="" alt="Book Room Icon">
        <p id="guestID">${booking.userID}</p>
        <p id="bookingRoom">${booking.roomNumber}</p>
        <!--<p id=""></p>-->
        <p id="availabilityStatus">Status: Available</p>
      </div>
    </article>`
    roomSection.innerHTML = allbookings.join('');
  });
}

const getGuestsTotalAmount = (guest, roomData) => {
  dollarsSpent.innerText = guest.calcTotalAmount(roomData);
}

const displayUserName = guest => {
  customerName.innerText = guest.name;
}

const fetchCustomers = fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .catch(err => console.log(err));

// const fetchSingleCustomer = fetch('http://localhost:3001/api/v1/customers/<id> where<id> will be a number of a customer’s id')
//   .then(response => response.json);
//   .catch(err => displayErrorMessage(err));

const fetchBookings = fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .catch(err => console.log(err));

const fetchRooms = fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .catch(err => console.log(err));

Promise.all([fetchCustomers, fetchBookings, fetchRooms])
  .then(values => {
    console.log(values)
    const currentCustomer = new Customer(values[0].customers[1], 'overlook2021')
    console.log(values[2].rooms);
    populateRoomSection(values[2]);
    getGuestsTotalAmount(currentCustomer, values[2].rooms);
    displayUserName(currentCustomer);
  })
  .catch(err => console.log(err));

  const hide = (element) => {
    return element.classList.add('hidden');
  }

  const unhide = (element) => {
    return element.classList.remove('hidden');
  }

  roomSection.addEventListener('click', event => {
    if (event.target.classList.contains('booking-icon')) {
      unhide(modalContainer);
    }

    formFromDate.value = fromDate.value;
    formToDate.value = toDate.value;
    form
  });
 
  window.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
      hide(modalContainer);
    }
  })