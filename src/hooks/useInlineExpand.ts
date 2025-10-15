import { useState, useCallback } from 'react';

export function useInlineExpand() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  }, []);
  const isOpen = useCallback((id: string) => openId === id, [openId]);
  const close = useCallback(() => setOpenId(null), []);
  return { openId, isOpen, toggle, close };
}
