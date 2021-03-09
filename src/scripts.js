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
const radioRoomType = document.getElementsByName('radioRoomType');
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
const formRadioRoomType = document.getElementsByName('formRadioRoomType');
const submitButton = document.getElementById('submitButton');
const radioLabels = document.querySelectorAll('.radio-label');
const bookingMessage = document.getElementById('bookingMessage');
const typeSelection = document.getElementById('typeSelection');
const yourBookings = document.getElementById('yourBookings');

import Customer from './Customer';
import Hotel from './Hotel';
import Booking from './Booking';
import Room from './Room';

let currentCustomer;
let hotel;
// let booking;
// let room;

const openDashboard = (guest, roomData) => {
  instantiateClasses(guest, roomData)
  populateRoomSection(roomData);
  getGuestsTotalAmount(currentCustomer, roomData);
  displayUserName(currentCustomer);
}

// const capitalize = word => {
//   const splitWords = word.split(' ');
//   splitWords.forEach(word => {
//     word = word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return splitWords.join(' ');
// }

const getRandomUserIndex = () => {
  return Math.floor(Math.random() * 50)
}

const instantiateClasses = (guest, roomData) => {
  currentCustomer = new Customer(guest, 'overlook2021');
  hotel = new Hotel(roomData);
}

const populateRoomSection = (roomData) => {
  const allRooms = roomData.map(room => {
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
          <p id="roomNumber${room.number}">Room number: <span class="room-number">${room.number}</span></p>
          <p id="roomType${room.number}" >Type: <span class="room-type">${room.roomType}</span></p>
          <p id="bedNum">Bed count: ${room.numBeds}</p>
          <p id="availabilityStatus">Status: Available</p>
        </div>
      </div>
    </article>`
  });
  roomSection.innerHTML = allRooms.join('');
}

const formatBookingDate = (date) => {
  return date.split('/').join('');
}


const populateBookingsSection = (bookingData) => {
  const allBookings =  bookingData.map(booking => {
    return `<article id="${formatBookingDate(booking.date)}-${booking.roomNumber}" class="room-card">
    <div class="room-image">
      <img id="roomImage" src="" alt="">
      <!-- <img id="priceTag" src="" alt="">   -->
    </div>
    <div class="room-details">
      <button class="icon-container" disabled>
        <img id="cancelBooking" class="booking-icon click" src="./images/noun_booking_1094614.svg" alt="Book Room Icon">
      </button>
      <div class="room-info">
        <p id="bookingDetails">Booking details:</p>
        <p>Room number: <span class="room-number">${booking.roomNumber}</span></p>
        <p>Date: <span>${booking.date}</span></p>
      </div>
    </div>
  </article>`
});
  roomSection.innerHTML = allBookings.join('');
}

const filterRoomsByType = () => {
  const roomList = Array.from(radioRoomType);
  const selection = roomList.find(room => room.checked);
  const filteredList = hotel.filterRoomsByType(selection.value);
  populateRoomSection(filteredList);
}

const getGuestsTotalAmount = (guest, roomData) => {
  dollarsSpent.innerText = guest.calcTotalAmount(roomData);
}

const displayUserName = guest => {
  customerName.innerText = guest.name;
}

const selectRoom = (targetContainer, bookingObj) => {
  //display reservation message
  currentCustomer.bookRoom(bookingObj);
  const targetRoomType = targetContainer.querySelector('.room-type').innerText;
  bookingMessage.innerHTML = `<p>You've selected room ${bookingObj.roomNumber}, a ${targetRoomType}.</p>`;
  console.log(currentCustomer.bookings)
}

const displayBookings = () => {
  sectionHeader.innerText = `${currentCustomer.name}'s Bookings:`;
  if (!!currentCustomer.bookings.length) {
    populateBookingsSection(currentCustomer.bookings);
  } else {
    alert('You do not have any bookings at this time.');
  }
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
    const randomCustomer = values[0].customers[getRandomUserIndex()];
    openDashboard(randomCustomer, values[2].rooms)
  })
  .catch(err => console.log(err));

  const hide = (element) => {
    return element.classList.add('hidden');
  }

  const unhide = (element) => {
    return element.classList.remove('hidden');
  }

  roomSection.addEventListener('click', event => {
    const targetRoom = event.target.closest('div');
    const targetRoomContainer = targetRoom.querySelector('.room-info')
    const targetRoomNumber = targetRoomContainer.querySelector('.room-number').innerText;
    const formattedDate = fromDate.value.split('-').join('/');
    
    if (event.target.classList.contains('booking-icon')) {
      const bookingObj = {
        "userID": currentCustomer.id,
        "date": formattedDate,
        "roomNumber": parseInt(targetRoomNumber)
      };

      unhide(modalContainer);
      selectRoom(targetRoomContainer, bookingObj);
      fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingObj)
      })
        .then(response => response.json())
        .then(data => console.log(data))
    };
  });
 
  typeSelection.addEventListener('click', filterRoomsByType);
  yourBookings.addEventListener('click', displayBookings);

  window.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
      hide(modalContainer);
    }
  });