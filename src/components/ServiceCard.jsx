
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ service, isSelected, onToggle }) => {
  return (
    <div 
      className={`
        border rounded-lg p-4 transition-all
        ${isSelected ? 'border-podcast-primary border-2' : 'border-gray-200'}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold">{service.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{service.description}</p>
          <p className="font-bold mt-3">${service.price}</p>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full ${isSelected ? 'text-podcast-primary' : 'text-gray-300'}`}
          onClick={() => onToggle(service.id)}
        >
          <CheckCircle size={24} className={isSelected ? 'fill-podcast-primary' : ''} />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
