import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import RoomCard from '@/components/RoomCard';
import Calendar from '@/components/Calendar';
import TimeSlot from '@/components/TimeSlot';
import ServiceCard from '@/components/ServiceCard';
import ReservationForm from '@/components/ReservationForm';
import ConfirmationModal from '@/components/ConfirmationModal';
import { rooms, services, checkAvailability, makeReservation } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';
import { Mic, CalendarDays, Clock, Radio } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservation, setReservation] = useState(null);
  
  // Load availability when room and date are selected
  useEffect(() => {
    if (selectedRoom && selectedDate) {
      setLoading(true);
      setSelectedTimeSlot(null);
      
      checkAvailability(selectedRoom, selectedDate, (availableSlots) => {
        setTimeSlots(availableSlots);
        setLoading(false);
      });
    }
  }, [selectedRoom, selectedDate]);
  
  const handleRoomSelect = (roomId) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId);
    
    // Move to date selection if room is selected
    if (roomId !== selectedRoom) {
      setStep(Math.max(step, 2));
    }
  };
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    
    // Move to time selection if date is selected
    if (date) {
      setStep(Math.max(step, 3));
    }
  };
  
  const handleTimeSelect = (timeId) => {
    setSelectedTimeSlot(timeId === selectedTimeSlot ? null : timeId);
    
    // Move to services selection if time is selected
    if (timeId !== selectedTimeSlot) {
      setStep(Math.max(step, 4));
    }
  };
  
  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  
  const handleSubmit = (formData) => {
    if (!selectedRoom || !selectedDate || !selectedTimeSlot) {
      toast({
        title: "Incomplete reservation",
        description: "Please select a room, date, and time slot.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    const selectedTimeDetails = timeSlots.find(slot => slot.id === selectedTimeSlot);
    
    const reservationData = {
      roomId: selectedRoom,
      date: selectedDate,
      time: selectedTimeDetails?.time,
      serviceIds: selectedServices,
      customer: formData
    };
    
    makeReservation(reservationData, (response) => {
      setLoading(false);
      
      if (response.success) {
        setReservation({
          ...reservationData,
          confirmationNumber: response.confirmationNumber
        });
        setShowConfirmation(true);
        
        // Reset form for new reservation
        // We keep this commented for now to allow user to review their reservation
        // resetForm();
      } else {
        toast({
          title: "Reservation Failed",
          description: response.message,
          variant: "destructive"
        });
      }
    });
  };
  
  const resetForm = () => {
    setSelectedRoom(null);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setSelectedServices([]);
    setTimeSlots([]);
    setStep(1);
  };
  
  const selectedRoomData = rooms.find(room => room.id === selectedRoom);
  const selectedTimeData = timeSlots.find(slot => slot.id === selectedTimeSlot);
  const selectedServicesData = services.filter(service => selectedServices.includes(service.id));
  
  // Calculate total price
  const totalPrice = (
    (selectedRoomData?.pricePerHour || 0) +
    selectedServicesData.reduce((sum, service) => sum + service.price, 0)
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Book Your Podcast Studio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reserve your perfect recording space and start creating amazing content with professional equipment and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main reservation flow */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Select Room */}
            <section className={`bg-white p-6 rounded-xl shadow-sm ${step !== 1 && 'opacity-90'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-podcast-primary text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Mic size={20} className="text-podcast-primary" />
                  Choose a Studio
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rooms.map(room => (
                  <RoomCard 
                    key={room.id}
                    room={room}
                    onSelect={handleRoomSelect}
                    isSelected={selectedRoom === room.id}
                  />
                ))}
              </div>
            </section>
            
            {/* Step 2: Select Date */}
            <section className={`bg-white p-6 rounded-xl shadow-sm ${step < 2 ? 'opacity-50' : step !== 2 && 'opacity-90'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-podcast-primary text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <CalendarDays size={20} className="text-podcast-primary" />
                  Select Date
                </h2>
              </div>
              
              <Calendar 
                selectedDate={selectedDate}
                onSelectDate={handleDateSelect}
              />
            </section>
            
            {/* Step 3: Select Time */}
            <section className={`bg-white p-6 rounded-xl shadow-sm ${step < 3 ? 'opacity-50' : step !== 3 && 'opacity-90'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-podcast-primary text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Clock size={20} className="text-podcast-primary" />
                  Choose a Time Slot
                </h2>
              </div>
              
              {selectedRoom && selectedDate ? (
                <div>
                  {loading ? (
                    <div className="text-center py-4">
                      <p>Loading available time slots...</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timeSlots.map(slot => (
                        <TimeSlot
                          key={slot.id}
                          slot={slot}
                          isAvailable={slot.isAvailable}
                          isSelected={selectedTimeSlot === slot.id}
                          onSelect={handleTimeSelect}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic text-center py-4">
                  Please select a room and date first
                </p>
              )}
            </section>
            
            {/* Step 4: Select Services */}
            <section className={`bg-white p-6 rounded-xl shadow-sm ${step < 4 ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-podcast-primary text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Radio size={20} className="text-podcast-primary" />
                  Additional Services
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">Enhance your recording experience with these services:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {services.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isSelected={selectedServices.includes(service.id)}
                    onToggle={handleServiceToggle}
                  />
                ))}
              </div>
            </section>
          </div>
          
          {/* Booking summary and form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
              <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
              
              {selectedRoom ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <Mic className="w-5 h-5 text-podcast-primary mt-1" />
                    <div>
                      <p className="font-medium">Selected Room</p>
                      <p className="text-gray-700">{selectedRoomData?.name}</p>
                      <p className="text-sm text-gray-500">${selectedRoomData?.pricePerHour}/hour</p>
                    </div>
                  </div>
                  
                  {selectedDate && (
                    <div className="flex items-start gap-3 pb-4 border-b">
                      <CalendarDays className="w-5 h-5 text-podcast-primary mt-1" />
                      <div>
                        <p className="font-medium">Selected Date</p>
                        <p className="text-gray-700">
                          {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {selectedTimeSlot && (
                    <div className="flex items-start gap-3 pb-4 border-b">
                      <Clock className="w-5 h-5 text-podcast-primary mt-1" />
                      <div>
                        <p className="font-medium">Selected Time</p>
                        <p className="text-gray-700">{selectedTimeData?.time}</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedServices.length > 0 && (
                    <div className="flex items-start gap-3 pb-4 border-b">
                      <Radio className="w-5 h-5 text-podcast-primary mt-1" />
                      <div>
                        <p className="font-medium">Additional Services</p>
                        <ul className="text-gray-700">
                          {selectedServicesData.map(service => (
                            <li key={service.id} className="flex justify-between">
                              <span>{service.name}</span>
                              <span>${service.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center font-bold text-lg pt-2">
                    <span>Total:</span>
                    <span>${totalPrice}</span>
                  </div>
                  
                  {selectedRoom && selectedDate && selectedTimeSlot && (
                    <div className="mt-6">
                      <h3 className="font-bold mb-3">Complete Your Booking</h3>
                      <ReservationForm 
                        onSubmit={handleSubmit}
                        selectedRoom={selectedRoomData}
                        selectedTime={selectedTimeData}
                        selectedServices={selectedServicesData}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  Select a room to see booking details
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2025 PodcastRoom. All rights reserved.</p>
            <p className="text-sm mt-1">Professional podcast studios for creators.</p>
          </div>
        </div>
      </footer>
      
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        reservation={reservation}
        rooms={rooms}
        services={services}
      />
    </div>
  );
};

export default Index;
