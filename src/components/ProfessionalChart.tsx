
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ProfessionalChart = () => {
  const chartData = [
    { time: '6AM', heartRate: 72, steps: 1200 },
    { time: '9AM', heartRate: 85, steps: 3400 },
    { time: '12PM', heartRate: 95, steps: 6800 },
    { time: '3PM', heartRate: 88, steps: 12000 },
    { time: '6PM', heartRate: 92, steps: 16500 },
    { time: '9PM', heartRate: 78, steps: 18751 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Heart Rate Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Heart Rate</h3>
              <p className="text-sm text-slate-400">Real-time monitoring</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">95</div>
              <div className="text-sm text-slate-400">BPM</div>
            </div>
          </div>
          
          <div className="h-32 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#94A3B8' }}
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="heartRate" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#1D4ED8' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between text-xs text-slate-400">
            <span>Resting: 68</span>
            <span>Max: 185</span>
            <span>Zone: Aerobic</span>
          </div>
        </CardContent>
      </Card>

      {/* Activity Chart */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Daily Activity</h3>
              <p className="text-sm text-slate-400">Steps & calories</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">18.7k</div>
              <div className="text-sm text-slate-400">steps</div>
            </div>
          </div>
          
          <div className="h-32 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#94A3B8' }}
                />
                <YAxis hide />
                <Bar 
                  dataKey="steps" 
                  fill="#10B981" 
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between text-xs text-slate-400">
            <span>Goal: 20k</span>
            <span>Calories: 1,247</span>
            <span>Distance: 12.4km</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalChart;
