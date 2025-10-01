import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Tool {
  id: string;
  name: string;
  description: string;
  tool_type: string;
  category: string;
  url: string | null;
  logo_url: string | null;
  referral_link: string | null;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string | null;
}

export interface Inspiration {
  id: string;
  name: string;
  description: string;
  url: string | null;
}

export const useTools = () => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as Tool[];
    },
  });
};

export const useResources = () => {
  return useQuery({
    queryKey: ['resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as Resource[];
    },
  });
};

export const useInspirations = () => {
  return useQuery({
    queryKey: ['inspirations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('inspirations')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as Inspiration[];
    },
  });
};
