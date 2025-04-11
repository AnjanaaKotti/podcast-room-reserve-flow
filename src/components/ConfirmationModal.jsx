
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock, Mic } from 'lucide-react';
import { format } from 'date-fns';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  reservation,
  rooms,
  services
}) => {
  if (!reservation) return null;
  
  const selectedRoom = rooms.find(room => room.id === reservation.roomId);
  const selectedServices = services.filter(service => 
    reservation.serviceIds.includes(service.id)
  );
  
  const totalAmount = (
    selectedRoom?.pricePerHour + 
    selectedServices.reduce((sum, service) => sum + service.price, 0)
  ).toFixed(2);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="bg-podcast-muted w-16 h-16 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="h-8 w-8 text-podcast-primary" />
            </div>
            <DialogTitle className="text-xl">Reservation Confirmed!</DialogTitle>
            <p className="text-gray-500 mt-1">Check your email for details</p>
          </div>
        </DialogHeader>
          
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-podcast-primary mt-0.5" />
              <div>
                <p className="font-medium">Date & Time</p>
                <p className="text-gray-600">
                  {format(new Date(reservation.date), 'EEEE, MMMM d, yyyy')}
                </p>
                <p className="text-gray-600">{reservation.time}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mic className="h-5 w-5 text-podcast-primary mt-0.5" />
              <div>
                <p className="font-medium">Room Reserved</p>
                <p className="text-gray-600">{selectedRoom?.name}</p>
              </div>
            </div>
            
            {selectedServices.length > 0 && (
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-podcast-primary mt-0.5" />
                <div>
                  <p className="font-medium">Additional Services</p>
                  <ul className="text-gray-600">
                    {selectedServices.map(service => (
                      <li key={service.id}>{service.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold">${totalAmount}</span>
            </div>
          </div>
        </div>
          
        <DialogFooter className="mt-4">
          <Button className="w-full bg-podcast-primary hover:bg-podcast-secondary" onClick={onClose}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
