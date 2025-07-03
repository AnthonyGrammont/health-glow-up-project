
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UserProfile = () => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Dekomori Sanae 🏅</h3>
            <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">Japan</p>
              </div>
              <div>
                <p className="text-slate-400">Age</p>
                <p className="text-white">21</p>
              </div>
              <div>
                <p className="text-slate-400">Weight</p>
                <p className="text-white">54kg</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">My Medications</span>
            <span className="text-blue-400 text-sm cursor-pointer hover:text-blue-300">View All</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
