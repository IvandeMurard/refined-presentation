-- Create tools table with all metadata
CREATE TABLE public.tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  tool_type TEXT NOT NULL, -- e.g., "Design", "Analytics", "Documentation"
  category TEXT NOT NULL, -- e.g., "Design Tools", "Product Management"
  url TEXT,
  logo_url TEXT,
  referral_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create resources table
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create inspirations table
CREATE TABLE public.inspirations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  tags TEXT[],
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create experiences table
CREATE TABLE public.experiences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create junction table for project-tools relationship
CREATE TABLE public.project_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  tool_id UUID NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(project_id, tool_id)
);

-- Create junction table for experience-tools relationship
CREATE TABLE public.experience_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  experience_id UUID NOT NULL REFERENCES public.experiences(id) ON DELETE CASCADE,
  tool_id UUID NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(experience_id, tool_id)
);

-- Enable Row Level Security
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inspirations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_tools ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is a portfolio site)
CREATE POLICY "Public read access for tools" ON public.tools FOR SELECT USING (true);
CREATE POLICY "Public read access for resources" ON public.resources FOR SELECT USING (true);
CREATE POLICY "Public read access for inspirations" ON public.inspirations FOR SELECT USING (true);
CREATE POLICY "Public read access for projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public read access for experiences" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Public read access for project_tools" ON public.project_tools FOR SELECT USING (true);
CREATE POLICY "Public read access for experience_tools" ON public.experience_tools FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX idx_project_tools_project_id ON public.project_tools(project_id);
CREATE INDEX idx_project_tools_tool_id ON public.project_tools(tool_id);
CREATE INDEX idx_experience_tools_experience_id ON public.experience_tools(experience_id);
CREATE INDEX idx_experience_tools_tool_id ON public.experience_tools(tool_id);