
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Activity, Calendar, TrendingUp } from 'lucide-react';

const HealthMetricsGrid = () => {
  const metrics = [
    {
      title: 'Steps',
      value: '18,751',
      unit: '',
      icon: Activity,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Heart Rate',
      value: '95',
      unit: 'BPM',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Calories',
      value: '2,124',
      unit: 'kcal',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Sleep',
      value: '6.5',
      unit: 'hr',
      icon: Calendar,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className={`${metric.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`bg-gradient-to-r ${metric.color} p-2 rounded-full`}>
                <metric.icon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">{metric.title}</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                {metric.unit && (
                  <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HealthMetricsGrid;
