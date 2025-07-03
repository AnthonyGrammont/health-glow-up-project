
import React from 'react';
import { Heart, Activity, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import HealthMetricsGrid from './HealthMetricsGrid';
import HealthChart from './HealthChart';

const HealthDashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-8 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">Hello, Dekomori! 👋</h1>
            <p className="text-blue-100">It's time for your routine health checkup today!</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Heart className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm text-blue-100">{currentDate}</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Health Score Card */}
        <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium mb-2">Asklepios Score</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">88</span>
                  <span className="text-lg ml-2 text-green-100">pts</span>
                </div>
                <p className="text-green-100 text-sm mt-2">You are a healthy individual.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics Grid */}
        <HealthMetricsGrid />

        {/* Activity Chart */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Heart Rate</h3>
              <span className="text-sm text-gray-500">Normal</span>
            </div>
            <HealthChart />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <Activity className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">Add Activity</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">Schedule</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
