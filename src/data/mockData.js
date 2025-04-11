
// Mock data for podcast room reservation system
export const rooms = [
  {
    id: 1,
    name: "Studio A",
    description: "Professional recording studio with soundproofing and premium equipment",
    capacity: 4,
    equipment: "Premium mics, mixer, headphones",
    pricePerHour: 75,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000"
  },
  {
    id: 2,
    name: "Studio B",
    description: "Mid-sized room ideal for interviews and small panel discussions",
    capacity: 6,
    equipment: "Standard mics, mixer, headphones",
    pricePerHour: 60,
    image: "https://images.unsplash.com/photo-1603099542595-4330959eb417?q=80&w=2000" 
  },
  {
    id: 3,
    name: "Studio C",
    description: "Compact studio perfect for solo recordings and voice overs",
    capacity: 2,
    equipment: "2 mics, basic mixer, headphones",
    pricePerHour: 45,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2000"
  }
];

export const timeSlots = [
  { id: 1, time: "9:00 AM - 10:00 AM" },
  { id: 2, time: "10:00 AM - 11:00 AM" },
  { id: 3, time: "11:00 AM - 12:00 PM" },
  { id: 4, time: "12:00 PM - 1:00 PM" },
  { id: 5, time: "1:00 PM - 2:00 PM" },
  { id: 6, time: "2:00 PM - 3:00 PM" },
  { id: 7, time: "3:00 PM - 4:00 PM" },
  { id: 8, time: "4:00 PM - 5:00 PM" },
  { id: 9, time: "5:00 PM - 6:00 PM" }
];

export const services = [
  {
    id: 1,
    name: "Audio Editing",
    description: "Professional post-production editing services",
    price: 50
  },
  {
    id: 2,
    name: "Equipment Rental",
    description: "Additional high-end microphones and accessories",
    price: 25
  },
  {
    id: 3,
    name: "Technical Assistant",
    description: "On-site audio engineer to help with your recording",
    price: 40
  },
  {
    id: 4,
    name: "Distribution Package",
    description: "Help publishing your podcast to major platforms",
    price: 30
  }
];

// Mock function to check availability
// In a real application, this would be a server call
export const checkAvailability = (roomId, date, callback) => {
  // Simulate API call
  setTimeout(() => {
    // Random availability for demo purposes
    const availableSlots = timeSlots.map(slot => ({
      ...slot,
      isAvailable: Math.random() > 0.3 // 70% chance of being available
    }));
    
    callback(availableSlots);
  }, 500);
};

// Mock function to make a reservation
export const makeReservation = (reservationData, callback) => {
  // Simulate API call
  setTimeout(() => {
    // In a real app, this would send data to the server
    console.log("Reservation data sent to server:", reservationData);
    
    // Simulate success
    const success = Math.random() > 0.1; // 90% chance of success
    
    if (success) {
      callback({
        success: true,
        confirmationNumber: `PRC-${Math.floor(Math.random() * 10000)}`,
        message: "Your reservation has been confirmed!"
      });
    } else {
      callback({
        success: false,
        message: "There was an error processing your reservation. Please try again."
      });
    }
  }, 1000);
};
