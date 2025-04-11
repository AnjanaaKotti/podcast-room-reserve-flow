
import React from 'react';
import { Clock } from 'lucide-react';

const TimeSlot = ({ slot, isAvailable, isSelected, onSelect }) => {
  return (
    <button
      className={`
        flex items-center justify-between w-full p-3 mb-2 rounded-lg transition-all
        ${isAvailable 
          ? isSelected 
            ? 'bg-podcast-primary text-white' 
            : 'bg-white border border-gray-200 hover:border-podcast-primary'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
      `}
      onClick={() => isAvailable && onSelect(slot.id)}
      disabled={!isAvailable}
    >
      <div className="flex items-center gap-2">
        <Clock size={18} />
        <span className="font-medium">{slot.time}</span>
      </div>
      
      <div className="text-sm">
        {isAvailable 
          ? isSelected 
            ? 'Selected' 
            : 'Available'
          : 'Booked'}
      </div>
    </button>
  );
};

export default TimeSlot;
