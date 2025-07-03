
import React from 'react';
import { Heart, Plus, Calendar, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { icon: Heart, label: 'Health', active: true },
    { icon: Plus, label: 'Add' },
    { icon: Calendar, label: 'History' },
    { icon: Settings, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-6 py-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className={`p-2 rounded-full transition-colors ${
              item.active 
                ? 'bg-blue-500 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs ${
              item.active ? 'text-blue-400 font-medium' : 'text-slate-400'
            }`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
