
import React from 'react';
import { Users, Radio, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoomCard = ({ room, onSelect, isSelected }) => {
  return (
    <div 
      className={`border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all ${
        isSelected ? 'border-podcast-primary border-2' : 'border-gray-200'
      }`}
    >
      <div className="relative">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-48 object-cover"
        />
        {isSelected && (
          <div className="absolute top-2 right-2 bg-podcast-primary text-white p-1 rounded-full">
            <CheckSquare size={20} />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{room.name}</h3>
        <p className="text-gray-600 mt-1">{room.description}</p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Users size={16} />
            <span>Capacity: {room.capacity} people</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Radio size={16} />
            <span>Equipment: {room.equipment}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">${room.pricePerHour}/hour</span>
          <Button 
            onClick={() => onSelect(room.id)} 
            variant={isSelected ? "outline" : "default"}
            className={isSelected ? "border-podcast-primary text-podcast-primary" : "bg-podcast-primary hover:bg-podcast-secondary"}
          >
            {isSelected ? 'Selected' : 'Select Room'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
