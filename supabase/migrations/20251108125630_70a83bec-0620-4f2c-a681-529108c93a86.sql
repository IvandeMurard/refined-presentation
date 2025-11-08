-- Create table for tool suggestions
CREATE TABLE public.tool_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  product_name TEXT NOT NULL,
  product_link TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.tool_suggestions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert suggestions (public submission)
CREATE POLICY "Anyone can submit tool suggestions" 
ON public.tool_suggestions 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading pending suggestions (optional, for now allow all reads)
CREATE POLICY "Anyone can read tool suggestions" 
ON public.tool_suggestions 
FOR SELECT 
USING (true);