
import React from 'react';
import HealthDashboard from '@/components/HealthDashboard';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HealthDashboard />
      <BottomNavigation />
      <div className="h-20"></div> {/* Spacer for bottom navigation */}
    </div>
  );
};

export default Index;
