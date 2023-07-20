import { FC, Key } from 'react';

import { NavItem } from '../NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list, onItemClick }) => {
  return (
    <ul className="xl block xl:flex xl:gap-10 notXl:space-y-10 ">
      {list.map((item, index: Key) => {
        return <NavItem onItemClick={onItemClick} item={item} key={index} />;
      })}
    </ul>
  );
};
