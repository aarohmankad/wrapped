import React from 'react';
import Link from 'next/link';

// Implement prefetch for performance on all Links
export default ({ children, ...props }) => {
  return (
    <Link {...props} prefetch>
      {children}
    </Link>
  );
};
