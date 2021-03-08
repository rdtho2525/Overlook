import Customer from './Customer';
import Booking from './Booking';
import Hotel from './Hotel';
import Room from './Room';


const fetchCustomers = fetch('http://localhost:3001/api/v1/customers')
  .then()
  .catch(err => displayErrorMessage(err));

// const fetchSingleCustomer = fetch('http://localhost:3001/api/v1/customers/<id> where<id> will be a number of a customer’s id')
//   .then();
//   .catch(err => displayErrorMessage(err));

const fetchBookings = fetch('http://localhost:3001/api/v1/bookings')
  .then()
  .catch(err => displayErrorMessage(err));

const fetchRooms = fetch('http://localhost:3001/api/v1/rooms')
  .then()
  .catch(err => displayErrorMessage(err));

Promise.all([fetchCustomers, fetchBookings, fetchRooms])
  .then(values => /*kick off application*/;