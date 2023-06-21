import React from 'react';
import { NavLinkProps, NavLink as RouterLink, generatePath, useLocation } from 'react-router-dom';

import { makeModalPath, makePagePath } from 'src/navigation';

import { Scheme } from '../types/types';

export type Props = Omit<NavLinkProps, 'to'> &
  React.RefAttributes<HTMLAnchorElement> & {
    url?: Scheme;
    dispatcher?: () => void;
  };

export const Link: React.FC<Props> = ({ url, children, dispatcher, ...props }) => {
  const { pathname } = useLocation();

  console.log('inside CRMLink', url);

  if (!url) {
    return null;
  }

  let to = null;

  try {
    to = generatePath(url.scheme, url.params);
  } catch (e) {
    // ignore
  }

  if (!to) {
    return null;
  }

  const handler = url.type === 'page' ? makePagePath : makeModalPath;

  const { onClick, ...otherProps } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('handleClick', url);
    dispatcher?.();
    onClick?.(e);
  };

  return (
    <RouterLink to={{ pathname: handler(pathname, to) }} {...otherProps} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};
