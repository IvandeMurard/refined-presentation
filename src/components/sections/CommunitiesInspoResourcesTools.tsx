import { useState, useMemo } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { FilterChips } from '@/components/FilterChips';
import { ZoomContextCard } from '@/components/ZoomContextCard';
import { useInlineExpand } from '@/hooks/useInlineExpand';
import { communities, inspirations, resources, tools } from '@/data/inspirationsToolsMerged';

const TABS = [
  { id: 'communities', label: 'Communautés' },
  { id: 'inspirations', label: 'Inspirations' },
  { id: 'resources', label: 'Resources' },
  { id: 'tools', label: 'Outils' },
] as const;

export function CommunitiesInspoResourcesTools() {
  const [active, setActive] = useState<typeof TABS[number]['id']>('communities');
  const { openId, toggle } = useInlineExpand();

  const data = useMemo(() => {
    switch (active) {
      case 'communities': return communities;
      case 'inspirations': return inspirations;
      case 'resources': return resources;
      case 'tools': return tools;
      default: return [];
    }
  }, [active]);

  return (
    <section id="resources" className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="WHAT DRIVES ME"
          title="Communautés · Inspirations · Resources · Outils"
          alignment="left"
          className="mb-8"
        />

        <FilterChips
          chips={TABS.map(t => ({ id: t.id, label: t.label }))}
          activeChip={active}
          onChipChange={(id) => setActive(id as any)}
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(item => (
            <ZoomContextCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              logo={item.logo}
              excerpt={item.excerpt}
              comment={item.comment}
              link={item.link || (item as any).homepage}
              media={item.media}
              tags={item.tags}
              open={openId === item.id}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
