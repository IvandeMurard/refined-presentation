import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  open: boolean;
  children: ReactNode;
  className?: string;
  ariaId?: string;
};

export function InlineExpand({ open, children, className, ariaId }: Props) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          role="region"
          aria-labelledby={ariaId}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={className}
        >
          <div className="pt-3">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
