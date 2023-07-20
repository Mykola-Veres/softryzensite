export interface ButtonListProps {
  data: {
    btnLogin: {
      text: string;
      link: string;
    };
    btnReg: {
      text: string;
      link: string;
    };
    ariaMobileMenu: string;
  };
  onButtonClick?: () => void;
  mobile?: boolean;
  className?: string;
}
