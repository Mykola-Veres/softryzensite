export interface ListCardProps {
  item: ItemCardProps;
  index: string | number;
  data?: { list: object[] } | undefined;
}

export type ItemCardProps = {
  number: string;
  text: string;
  heading: string;
  time: string;
};
