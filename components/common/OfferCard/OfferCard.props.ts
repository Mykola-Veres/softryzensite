export interface OfferCardProps {
  item: ItemCardProps;
  index?: number;
}

export type ItemCardProps = {
  number: string;
  text: string;
  heading: string;
};
