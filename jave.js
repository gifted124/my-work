document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const summary = document.getElementById('summary');
    // const seats = document.getElementById('seats');
    const minorMessage = document.getElementById('minorMessage');
  
    // Generate seats (Example: 25 seats)
    // const seatCount = 25;
    // for (let i = 1; i <= seatCount; i++) {
    //   const seat = document.createElement('div');
    //   seat.classList.add('seat');
    //   seat.textContent = i;
    //   seat.addEventListener('click', () => {
    //     if (!seat.classList.contains('booked')) {
    //       seat.classList.toggle('selected');
    //     }
    //   });
    //   seats.appendChild(seat);
    // }
  
    // Show if user is a minor
    document.getElementById('age').addEventListener('input', (e) => {
      const age = parseInt(e.target.value, 10);
      if (age < 18) {
        minorMessage.textContent = 'You are a minor.';
        minorMessage.style.color = 'red';
      } else {
        minorMessage.textContent = '';
      }
    });
  
    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Collect data
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const movie = document.getElementById('movie').value;
      const ticketType = document.getElementById('ticketType').value;
      const tickets = document.getElementById('tickets').value;
  
      // Validate selected seats
      const selectedSeats = document.querySelectorAll('.seat.selected');
      if (selectedSeats.length < tickets) {
        alert('Please select enough seats.');
        return;
      }
  
      // Calculate total cost
      const ticketPrice = ticketType === 'Premium' ? 20 : 10;
      const totalCost = ticketPrice * tickets;
  
      // Show summary
      summary.innerHTML = `
        <h2>Booking Summary</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Movie: ${movie} (${date} at ${time})</p>
        <p>Tickets: ${tickets} (${ticketType})</p>
        <p>Seats: ${Array.from(selectedSeats).map(seat => seat.textContent).join(', ')}</p>
        <p>Total Cost: $${totalCost}</p>
      `;
  
      // Mark selected seats as booked
      selectedSeats.forEach(seat => seat.classList.add('booked'));
    });
  });
  