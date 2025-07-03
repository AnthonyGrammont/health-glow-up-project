
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, AlertTriangle } from 'lucide-react';

const MedicationList = () => {
  const medications = [
    {
      name: 'Omeprazole',
      dosage: '20mg',
      frequency: '1x Daily',
      status: 'taken',
      color: 'green'
    },
    {
      name: 'Atorvastatin',
      dosage: '5mg',
      frequency: '1x Daily',
      status: 'pending',
      color: 'blue'
    },
    {
      name: 'Lisinopril',
      dosage: '2mg',
      frequency: '2x Daily',
      status: 'overdue',
      color: 'red'
    },
    {
      name: 'Levothyroxine',
      dosage: '200mg',
      frequency: '2x Daily',
      status: 'pending',
      color: 'blue'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'taken':
        return <Check className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'overdue':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'taken':
        return 'bg-green-500';
      case 'pending':
        return 'bg-blue-500';
      case 'overdue':
        return 'bg-red-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">My Medications</h3>
        
        <div className="space-y-3">
          {medications.map((med, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg">
              <div className={`w-2 h-8 ${getStatusColor(med.status)} rounded-full`}></div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white">{med.name}</span>
                  <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-300">
                    {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-400">{med.dosage} - {med.frequency}</p>
              </div>
              
              {getStatusIcon(med.status)}
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-sm text-slate-400">See All Medications</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationList;
