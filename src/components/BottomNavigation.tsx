
import React from 'react';
import { Heart, Plus, Calendar, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { icon: Heart, label: 'Health', active: true },
    { icon: Plus, label: 'Add Food' },
    { icon: Calendar, label: 'History' },
    { icon: Settings, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className={`p-2 rounded-full ${item.active ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs ${item.active ? 'text-blue-500 font-medium' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
