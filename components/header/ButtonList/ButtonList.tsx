import { FC } from 'react';

import { BtnLink } from '@/components/button/BtnLink';
import { routes } from '@/utils/routes';
import { ButtonListProps } from './ButtonList.props';

export const ButtonList: FC<ButtonListProps> = ({
  data,
  onButtonClick,
  mobile,
  ...props
}) => {
  return (
    <ul {...props}>
      <li onClick={onButtonClick} className={` ${!mobile ? 'mr-3' : ''}`}>
        <BtnLink
          variant={!mobile ? 'primary' : 'secondary'}
          href={data.btnLogin.link}
          className="  border-[1px] border-solid md:h-[52px] md:w-[186px] md:font-normal"
        >
          {data.btnLogin.text}
        </BtnLink>
      </li>

      <li
        onClick={onButtonClick}
        className={` ${!mobile ? 'mdOnly:mr-5' : ''}`}
      >
        <BtnLink
          href={data.btnReg.link}
          variant={!mobile ? 'ghost' : 'primary'}
          className={` border-[1px] border-solid  md:h-[52px] md:w-[186px] md:font-normal  ${
            mobile && 'border-white_light'
          }`}
        >
          {data.btnReg.text}
        </BtnLink>
      </li>
    </ul>
  );
};
