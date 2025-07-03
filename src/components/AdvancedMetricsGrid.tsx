
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Heart, TrendingUp, Droplets } from 'lucide-react';

const AdvancedMetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Sleep Quality */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-slate-400">Sleep Quality</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">144</span>
              <span className="text-xs text-slate-400">hr</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Today</span>
              <span>Week</span>
              <span>Month</span>
              <span>All Time</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hydration */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-slate-400">Hydration</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">1,487</span>
              <span className="text-xs text-slate-400">mL</span>
            </div>
            <div className="grid grid-cols-8 gap-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-8 rounded ${i < 5 ? 'bg-blue-500' : 'bg-slate-700'}`}
                ></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blood Pressure */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-slate-400">Blood Pressure</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">98.2</span>
              <span className="text-xs text-slate-400">mmHg</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-red-500 rounded-sm"
                  style={{ height: `${Math.random() * 20 + 10}px` }}
                ></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Steps */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-slate-400">Steps</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">18,751</span>
              <span className="text-xs text-slate-400">steps</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <p className="text-xs text-slate-400">95% of daily goal</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedMetricsGrid;
