import { useState } from 'react';

export type AudienceType = 'pm' | 'design' | 'recruiter';

export const useAudience = (initialAudience: AudienceType = 'pm') => {
  const [activeAudience, setActiveAudience] = useState<AudienceType>(initialAudience);

  const audiences = [
    { id: 'pm' as AudienceType, label: 'Product Manager' },
    { id: 'design' as AudienceType, label: 'Designer' },
    { id: 'recruiter' as AudienceType, label: 'Recruiter' }
  ];

  const handleAudienceChange = (audienceId: string) => {
    setActiveAudience(audienceId as AudienceType);
  };

  return {
    activeAudience,
    setActiveAudience: handleAudienceChange,
    audiences
  };
};