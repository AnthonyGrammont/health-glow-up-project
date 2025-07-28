
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserProfileData {
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  sex?: string;
  weight_kg?: number;
  height_cm?: number;
  blood_type?: string;
  current_medications?: string[];
}

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching profile:', error);
          return;
        }

        setProfile(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const getInitials = () => {
    if (!profile) return user?.email?.charAt(0).toUpperCase() || 'U';
    return `${profile.first_name.charAt(0)}${profile.last_name.charAt(0)}`.toUpperCase();
  };

  if (loading) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-slate-700 rounded-full mb-4"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6 text-center">
          <User className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Complete Your Profile</h3>
          <p className="text-slate-400 text-sm mb-4">
            Add your health information to get personalized insights
          </p>
          <Button 
            onClick={() => window.location.href = '/profile-setup'}
            className="w-full"
          >
            Set Up Profile
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{getInitials()}</span>
            </div>
            {profile.current_medications && profile.current_medications.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {profile.first_name} {profile.last_name}
              </h3>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
              <div>
                <p className="text-slate-400">Age</p>
                <p className="text-white">
                  {profile.date_of_birth ? calculateAge(profile.date_of_birth) : 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Weight</p>
                <p className="text-white">
                  {profile.weight_kg ? `${profile.weight_kg}kg` : 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Blood Type</p>
                <p className="text-white">
                  {profile.blood_type || 'Unknown'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">My Medications</span>
            <span className="text-blue-400 text-sm cursor-pointer hover:text-blue-300">View All</span>
          </div>
          <div className="text-xs text-slate-500">
            {profile.current_medications?.length || 0} active medications
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
