
import React from 'react';
import { Search, Bell, Settings, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AdvancedMetricsGrid from './AdvancedMetricsGrid';
import ProfessionalChart from './ProfessionalChart';
import UserProfile from './UserProfile';
import MedicationList from './MedicationList';

const HealthDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 rounded-lg p-2">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold">Wellness Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search our AI Dashboard..."
                className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <Bell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Hello, Dekomori! 👋</h2>
                  <p className="text-blue-100 mb-4">It's time for your routine health checkup today!</p>
                  
                  <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-blue-100 text-sm">Asklepios Score</p>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">78.25</span>
                        <span className="text-lg ml-1 text-blue-100">pts</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-blue-500 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold">98</div>
                        <div className="text-xs text-blue-100">AI</div>
                      </div>
                      <div className="bg-blue-500 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold">48</div>
                        <div className="text-xs text-blue-100">Suggestions</div>
                      </div>
                      <div className="bg-red-500 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold">12</div>
                        <div className="text-xs text-red-100">Alerts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Metrics */}
            <AdvancedMetricsGrid />

            {/* Professional Chart */}
            <ProfessionalChart />

            {/* Health Suggestions */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Health Suggestions</h3>
                  <span className="text-2xl font-bold text-white">1,168+</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-slate-300">Wellness</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-slate-300">Nutrition</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-slate-300">Exercise</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Profile & Details */}
          <div className="space-y-6">
            <UserProfile />
            <MedicationList />
            
            {/* Add New Medication Button */}
            <Card className="bg-blue-600 border-blue-500 hover:bg-blue-700 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <Plus className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Add New Medication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
