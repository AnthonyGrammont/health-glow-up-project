
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HealthChart = () => {
  const data = [
    { time: '6AM', value: 72 },
    { time: '9AM', value: 85 },
    { time: '12PM', value: 95 },
    { time: '3PM', value: 88 },
    { time: '6PM', value: 92 },
    { time: '9PM', value: 78 },
  ];

  return (
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#1D4ED8' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-800">95</span>
          <span className="text-sm text-gray-500 ml-2">BPM</span>
        </div>
      </div>
    </div>
  );
};

export default HealthChart;
