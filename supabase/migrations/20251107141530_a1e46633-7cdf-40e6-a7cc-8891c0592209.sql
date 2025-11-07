-- Add feedback column to tools table
ALTER TABLE tools 
ADD COLUMN IF NOT EXISTS feedback TEXT;

COMMENT ON COLUMN tools.feedback IS 'Court feedback utilisateur (1-2 phrases max)';

-- Insert 8 initial tools with descriptions
INSERT INTO tools (name, description, logo_url, tool_type, category, url, feedback, referral_link) 
VALUES
  ('Notion', 'All-in-one workspace for notes, docs, and project management', '/img/notion-icon.png', 'Documentation', 'Side-project / Pro', 'https://notion.so', 'Indispensable au quotidien.', NULL),
  ('Figma', 'Collaborative interface design tool', '/img/figma-icon.svg', 'Design', 'Side-project / Pro', 'https://figma.com', 'Accélère la mise en page et le prototypage.', NULL),
  ('Linear', 'Modern project and issue tracking tool', '/placeholder.svg', 'Product Dev', 'Side-project', 'https://linear.app', 'J''apprécie la clarté de l''UI.', NULL),
  ('Supabase', 'Open source Firebase alternative with Postgres database', '/img/supabase-icon.png', 'Backend', 'Side-project', 'https://supabase.com', 'Simple, puissant, parfait pour 0→1.', NULL),
  ('n8n', 'Workflow automation tool for connecting apps and services', '/placeholder.svg', 'Automation', 'Side-project', 'https://n8n.io', 'Automatise sans friction.', NULL),
  ('Cal.com', 'Open source scheduling platform', '/placeholder.svg', 'Scheduling', 'Portfolio', 'https://cal.com', 'Simplifie mes rendez-vous.', NULL),
  ('Fathom', 'AI meeting assistant for automatic transcription and notes', '/placeholder.svg', 'Documentation', 'Side-project', 'https://fathom.video', 'Idéal pour les calls d''équipe.', NULL),
  ('Perplexity', 'AI-powered research and search engine', '/placeholder.svg', 'AI Research', 'Side-project', 'https://perplexity.ai', 'Recherche dirigée, hyper efficace.', NULL)
ON CONFLICT (id) DO NOTHING;