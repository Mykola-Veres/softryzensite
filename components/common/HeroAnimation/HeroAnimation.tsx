import { FC } from 'react';
import cn from 'classnames';

import { HeroAnimationProps } from './HeroAnimation.props';

import styles from './HeroAnimation.module.css';

export const HeroAnimation: FC<HeroAnimationProps> = ({
  outerWrapperClassNames,
  innerWrapperClassNames,
}) => {
  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-0 h-[640px] overflow-hidden md:h-[580px] xl:h-[700px] xl:gap-x-[480px] smOnly:hidden',

        outerWrapperClassNames,
      )}
    >
      <div
        className={cn(
          'absolute right-[calc(50%+100px)]  top-0 flex h-[640px]  w-[480px] flex-row-reverse overflow-hidden md:right-[calc(50%+190px)]  md:h-[580px] xl:right-[calc(50%+230px)] xl:h-[700px]',
          innerWrapperClassNames,
        )}
      >
        <div className="relative w-[160px] border-r  border-[#E0E0E0] ">
          <div
            className={cn(
              styles.firstCube,
              'absolute left-[11px] top-[154px] h-[17px] w-[17px] bg-primary md:left-[22px] md:top-[303px] md:h-[34px] md:w-[34px] xl:left-[20px] xl:top-[282px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.secondCube,
              'absolute bottom-[37px] left-[38px] h-[8px] w-[8px] bg-primary md:bottom-[74px] md:left-[65px] md:h-[15px] md:w-[15px] xl:bottom-[68px] xl:left-[60px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirdCube,
              'absolute right-[26px] top-[150px] h-[8px] w-[8px] bg-primary md:right-[52px] md:top-[296px] md:h-[15px] md:w-[15px] xl:right-[48px] xl:top-[275px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fourthCube,
              'absolute bottom-[112px] right-[11px] h-[17px] w-[17px] bg-primary md:bottom-[222px] md:right-[22px] md:h-[34px] md:w-[34px] xl:bottom-[205px] xl:right-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>

        <div className="relative  w-[160px] border-r  border-[#E0E0E0]">
          <div
            className={cn(
              styles.ninthCube,
              'absolute bottom-[37px] left-[11px] h-[17px] w-[17px] bg-primary md:bottom-[74px] md:left-[22px] md:h-[34px] md:w-[34px] xl:bottom-[68px] xl:left-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.tenthCube,
              'absolute left-[25px] top-[38px] h-[8px] w-[8px] bg-primary md:left-[49px] md:top-[76px] md:h-[15px] md:w-[15px] xl:left-[45px] xl:top-[70px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.eleventhCube,
              'absolute left-[47px] top-[115px] h-[8px] w-[8px] bg-primary md:left-[94px] md:top-[228px] md:h-[15px] md:w-[15px] xl:left-[87px] xl:top-[211px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.twelfthCube,
              'absolute bottom-[147px] left-[47px] h-[8px] w-[8px] bg-primary md:bottom-[290px] md:left-[94px] md:h-[15px] md:w-[15px] xl:bottom-[270px] xl:left-[87px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirteenthCube,
              'absolute right-[11px] top-[197px] h-[17px] w-[17px] bg-primary md:right-[22px] md:top-[394px] md:h-[34px] md:w-[34px] xl:right-[20px] xl:top-[361px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>
        <div className="relative  w-[160px] border-r  border-[#E0E0E0]">
          <div
            className={cn(
              styles.fourteenthCube,
              'absolute left-[11px] top-[33px] h-[17px] w-[17px] bg-primary md:left-[22px] md:top-[66px] md:h-[34px] md:w-[34px] xl:left-[20px] xl:top-[61px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fifteenthCube,
              'absolute left-[39px] top-[128px] h-[8px] w-[8px] bg-primary md:left-[78px] md:top-[252px] md:h-[15px] md:w-[15px] xl:left-[72px] xl:top-[234px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.sixteenthCube,
              'absolute left-[39px] top-[209px] h-[8px] w-[8px] bg-primary md:left-[78px] md:top-[445px] md:h-[15px] md:w-[15px] xl:left-[72px] xl:top-[386px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.seventeenthCube,
              'absolute bottom-[75px] left-[64px] h-[8px] w-[8px] bg-primary md:bottom-[157px] md:left-[130px] md:h-[15px] md:w-[15px] xl:bottom-[137px] xl:left-[132px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
        </div>
      </div>
      <div
        className={cn(
          'absolute left-[calc(50%+100px)] top-0 flex h-[640px] w-[480px] overflow-hidden md:left-[calc(50%+190px)] md:h-[580px] xl:left-[calc(50%+230px)] xl:h-[700px]',
          innerWrapperClassNames,
        )}
      >
        <div className="relative  w-[160px] border-l border-[#E0E0E0] ">
          <div
            className={cn(
              styles.firstCube,
              'absolute right-[11px] top-[154px] h-[17px] w-[17px] bg-primary md:right-[22px] md:top-[303px] md:h-[34px] md:w-[34px] xl:right-[20px] xl:top-[282px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.secondCube,
              'absolute bottom-[37px]  right-[38px]  h-[8px] w-[8px] bg-primary md:bottom-[74px] md:right-[64px] md:h-[15px] md:w-[15px] xl:bottom-[68px] xl:right-[49px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirdCube,
              'absolute left-[26px] top-[150px] h-[8px] w-[8px] bg-primary md:left-[52px]  md:top-[296px] md:h-[15px] md:w-[15px] xl:left-[48px]  xl:top-[275px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fourthCube,
              'absolute bottom-[112px] left-[11px] h-[17px] w-[17px] bg-primary md:bottom-[222px] md:left-[22px] md:h-[34px] md:w-[34px] xl:bottom-[205px] xl:left-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>

        <div className="relative  w-[160px] border-l  border-[#E0E0E0]">
          <div
            className={cn(
              styles.ninthCube,
              'absolute bottom-[37px] right-[11px] h-[17px] w-[17px] bg-primary md:bottom-[74px] md:right-[22px] md:h-[34px] md:w-[34px] xl:bottom-[68px] xl:right-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.tenthCube,
              'absolute right-[25px] top-[38px] h-[8px] w-[8px] bg-primary md:right-[49px] md:top-[76px] md:h-[15px] md:w-[15px] xl:right-[45px] xl:top-[70px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.eleventhCube,
              'absolute right-[47px] top-[115px] h-[8px] w-[8px] bg-primary md:right-[94px] md:top-[228px] md:h-[15px] md:w-[15px] xl:right-[54px] xl:top-[211px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.twelfthCube,
              'absolute bottom-[147px] right-[47px] h-[8px] w-[8px] bg-primary md:bottom-[290px] md:right-[94px] md:h-[15px] md:w-[15px] xl:bottom-[270px] xl:right-[87px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirteenthCube,
              'absolute left-[11px] top-[197px] h-[17px] w-[17px] bg-primary md:left-[22px] md:top-[394px] md:h-[34px] md:w-[34px] xl:left-[20px] xl:top-[361px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>
        <div className="relative  w-[160px] border-l border-[#E0E0E0]">
          <div
            className={cn(
              styles.fourteenthCube,
              'absolute right-[11px] top-[33px] h-[17px] w-[17px] bg-primary md:right-[22px] md:top-[66px] md:h-[34px] md:w-[34px] xl:right-[20px] xl:top-[61px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fifteenthCube,
              'absolute right-[39px] top-[128px] h-[8px] w-[8px] bg-primary md:right-[78px] md:top-[252px] md:h-[15px] md:w-[15px] xl:right-[72px] xl:top-[234px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.sixteenthCube,
              'absolute right-[39px] top-[209px] h-[8px] w-[8px] bg-primary md:right-[78px] md:top-[445px] md:h-[15px] md:w-[15px] xl:right-[72px] xl:top-[386px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.seventeenthCube,
              'absolute bottom-[75px] right-[64px] h-[8px] w-[8px] bg-primary md:bottom-[157px] md:right-[130px] md:h-[15px] md:w-[15px] xl:bottom-[137px] xl:right-[132px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};
