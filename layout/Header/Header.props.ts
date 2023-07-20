import { Key, ReactFragment, ReactPortal } from 'react';

export interface ItemProps {
  id: Key | null | undefined;
  url: string;
  scrollId: string;
  label:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}
