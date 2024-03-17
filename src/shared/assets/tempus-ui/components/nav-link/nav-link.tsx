import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { href, onClick, children } = props;

  return (
    <Link href={href} passHref legacyBehavior>
      <a ref={ref} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
});

export default NavLink;
