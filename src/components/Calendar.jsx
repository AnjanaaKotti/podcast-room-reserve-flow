
import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format, addDays, isSameDay } from 'date-fns';

const Calendar = ({ onSelectDate, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Generate 7 days starting from current date
  const days = Array.from({ length: 7 }, (_, i) => addDays(currentDate, i));
  
  const handlePrevious = () => {
    setCurrentDate(prev => addDays(prev, -7));
  };
  
  const handleNext = () => {
    setCurrentDate(prev => addDays(prev, 7));
  };
  
  const isToday = (date) => {
    return isSameDay(date, new Date());
  };
  
  const isSelected = (date) => {
    return selectedDate && isSameDay(date, selectedDate);
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon size={20} className="text-podcast-primary" />
          <h3 className="font-medium text-lg">Select Date</h3>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrevious}
            className="h-8 w-8"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleNext}
            className="h-8 w-8"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "flex flex-col h-16 items-center justify-center rounded-md p-2",
              isToday(day) && "border-podcast-accent",
              isSelected(day) && "bg-podcast-primary text-white hover:bg-podcast-secondary",
              !isSelected(day) && !isToday(day) && "hover:border-podcast-primary"
            )}
            onClick={() => onSelectDate(day)}
          >
            <span className="text-xs">{format(day, 'EEE')}</span>
            <span className="text-lg font-bold">{format(day, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
