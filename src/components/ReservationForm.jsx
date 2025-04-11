
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const ReservationForm = ({ onSubmit, selectedRoom, selectedTime, selectedServices }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please provide a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your full name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
        <Input 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Your phone number"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special requests or notes"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-podcast-primary focus:border-podcast-primary"
          rows={3}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-podcast-primary hover:bg-podcast-secondary"
      >
        Confirm Reservation
      </Button>
    </form>
  );
};

export default ReservationForm;
