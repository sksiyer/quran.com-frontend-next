import classNames from 'classnames';
import { useSelector } from 'react-redux';

import MoonIllustrationSVG from '../../../public/images/moon-illustration.svg';
import Button, { ButtonSize, ButtonType } from '../dls/Button/Button';

import styles from './Banner.module.scss';

import { selectIsBannerVisible } from '@/redux/slices/banner';
import { logEvent } from 'src/utils/eventLogger';

type BannerProps = {
  onClick?: () => void;
  href?: string;
  text: string;
  cta: string;
};

const Banner = ({ text, cta }: BannerProps) => {
  const isBannerVisible = useSelector(selectIsBannerVisible);

  const onDonateClicked = () => {
    logEvent('donate_button_clicked', {
      source: 'banner',
    });
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.isVisible]: isBannerVisible,
      })}
    >
      <div className={styles.description}>
        <div className={styles.illustrationContainer}>
          <MoonIllustrationSVG />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.ctaContainer}>
        <Button
          isNewTab
          onClick={onDonateClicked}
          href="https://donate.quran.com"
          className={styles.cta}
          size={ButtonSize.Small}
          type={ButtonType.Success}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
