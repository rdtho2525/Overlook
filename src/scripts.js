import './css/base.scss';
import './images/pexels-konstantinos-eleftheriadis-2034335.jpg'
import './images/avatar.svg'
import './images/noun_booking_1094614.svg'
import './images/logo2.png'
// import './css/style.scss';

const dollarsSpent = document.getElementById('dollarsSpent');
const customerName = document.getElementById('customerName');
const fromDate = document.getElementById('fromDate');
const radioRoomType = document.getElementsByName('radioRoomType');
const sectionHeader = document.getElementById('sectionHeader');
const roomSection = document.getElementById('roomSection');
const modalContainer = document.getElementById('modalContainer');
const loginButton = document.getElementById('loginButton');
const alertMessage = document.getElementById('alertMessage');
const typeSelection = document.getElementById('typeSelection');
const yourBookings = document.getElementById('yourBookings');
const dashboard = document.getElementById('dashboard');
const loginPage = document.getElementById('loginPage');

import Customer from './Customer';
import Hotel from './Hotel';

let currentCustomer;
let allBookings;
let allRooms;
const hotel = new Hotel();

const hide = (element) => {
  return element.classList.add('hidden');
}

const unhide = (element) => {
  return element.classList.remove('hidden');
}

const checkLogin = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget.form);
  const username =  formData.get('username');
  const password = formData.get('password');
  validateLogin(username, password);
  event.target.reset();
}

const validateLogin = (username, password) => {
  const guestID = parseInt(username.replace(/[ a-zA-A]/g, ''));
  if (password === "overlook2021") {
    retrieveAllData(guestID);
  } else {
    displayLoginError();
  }
}


const openDashboard = (values) => {
  currentCustomer = new Customer(values[0], 'overlook2021');
  allBookings = values[1].bookings;
  allRooms = values[2].rooms;
  hide(loginPage);
  unhide(dashboard);
  hotel.checkRoomAvailability(allRooms, allBookings, fromDate.value);
  populateRoomSection(hotel.availableRooms);
  getGuestsTotalAmount(currentCustomer, allRooms, allBookings);
  displayUserName(currentCustomer);
}

const displayLoginError = () => {
  unhide(alertIcon);
  tagline.classList.add('error')
  tagline.innerText = 'Invalid username and/or password. Please try again.'
}

const formattedDate = () => {
  const date = fromDate.value.replaceAll('-', '/');
  return date;
}

const populateRoomSection = (roomData) => {
  const allRooms = roomData.map(room => {
   return `<article class="room-card">
      <div class="room-image">
        <img id="roomImage" src="" alt="">
        <!-- <img id="priceTag" src="" alt="">   -->
      </div>
      <div class="room-details">
        <button name="booking" class="icon-container">
          <img id="" class="booking-icon click" src="./images/noun_booking_1094614.svg" alt="Book Room Icon">
        </button>
        <div class="room-info">
          <p id="roomNumber${room.number}">Room number: <span class="room-number">${room.number}</span></p>
          <p id="roomType${room.number}" >Type: <span class="room-type">${room.roomType}</span></p>
          <p id="bedNum">Bed count: ${room.numBeds}</p>
          <p id="cost">Cost: $${room.costPerNight}</p>
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

const getGuestsTotalAmount = (guest, roomData, bookingData) => {
  guest.getBookings(bookingData);
  dollarsSpent.innerText = guest.calcTotalAmount(roomData);
}

const displayUserName = (guest) => {
  customerName.innerText = guest.name;
}

const selectRoom = (targetContainer, bookingObj) => {
  currentCustomer.bookRoom(bookingObj);
  const targetRoomType = targetContainer.querySelector('.room-type').innerText;
  displayMessage(`Congratulations! You've booked room ${bookingObj.roomNumber}, a ${targetRoomType} for ${bookingObj.date}.`);
}

const displayBookings = () => {
  if (!!currentCustomer.bookings.length) {
    sectionHeader.innerText = `${currentCustomer.name}'s Bookings:`;
    populateBookingsSection(currentCustomer.bookings);
  } else {
    displayMessage('You do not have any bookings at this time.');
  }
}

const checkValidity = (bookingObj) => {
  if (!checkContents(bookingObj.date)) {
    return true;
  } else {
    displayMessage('A date is required in order to book a room.')
    return false;
  }
}  

const checkContents = (userInput) => {
  const formattedInput = userInput.trim();
  if (!formattedInput) {
    return true;
  } else {
    return false;
  }
}

const displayMessage = (message) => {
  unhide(modalContainer);
  alertMessage.innerText = message;
}

const retrieveAllData = (id) => {
  const fetchSingleCustomer = fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch(err => displayErrorMessage('Something went wrong! Please check again later'));

  const fetchBookings = fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .catch(err => displayErrorMessage('Something went wrong! Please check again later'));

  const fetchRooms = fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .catch(err => displayErrorMessage('Something went wrong! Please check again later'));

    return Promise.all([fetchSingleCustomer, fetchBookings, fetchRooms])
     .then(values => {
      openDashboard(values);
  })
  .catch(err => console.log(err));
}

const facilitatePostBooking = (event) => {
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

      if (checkValidity(bookingObj)) {
        selectRoom(targetRoomContainer, bookingObj);
        postBooking(bookingObj);
        currentCustomer.calcTotalAmount(hotel.availableRooms);
      }
    };
  }

const postBooking = (bookingObj) => {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookingObj)
  })
    .then(response => { 
      if (!response.ok) {
      displayErrorMessage('A date is required in order to book a room.');
      } else {
        return response.json();
      }
    })
    .then(data => console.log(data))
}
  
loginButton.addEventListener('click', (event) => {
  checkLogin(event);
});

roomSection.addEventListener('click', event => {
  facilitatePostBooking(event);
});

typeSelection.addEventListener('click', filterRoomsByType);
yourBookings.addEventListener('click', displayBookings);
fromDate.addEventListener('change', () => {
  hotel.checkRoomAvailability(allRooms, allBookings, formattedDate())
  populateRoomSection(hotel.availableRooms);
})
window.addEventListener('click', (event) => {
  if (event.target == modalContainer) {
    hide(modalContainer);
  }
});
