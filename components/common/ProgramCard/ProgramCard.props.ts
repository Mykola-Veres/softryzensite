export interface ProgramCardProps {
  btn: {
    text: {
      active: string;
      nonActive: string;
    };
  };
  item: {
    id: number;
    text: string;
    title: string;
    path: string;
    active: boolean;
  };
}
