import { useMemo, useState } from 'react';

import cx from 'classnames';

import tfl from '../../assets/tfl.png';
// import nationalRail from '../../assets/nationalrail.png';
import { BedIcon } from '../../icons/Bed/BedIcon';
import { BathIcon } from '../../icons/Bath/BathIcon';

import styles from './SearchResultsItem.module.scss';

type SearchResultsItemProps = {
  result: Partial<{
    availableFrom: string;
    bedCount: number;
    bathCount: number;
    title: string;
    details: string[];
    id: number;
    imageUrl: string;
    isNew: boolean;
    rentPerMonth: number;
    rentPerWeek: number;
  }>
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumSignificantDigits: 3,
  }).format(price);
}

export const SearchResultsItem = ({ result }: SearchResultsItemProps) => {
  const [like, setLike] = useState(false);
  const { bedCount, bathCount, title, details, id, imageUrl, isNew, rentPerMonth, rentPerWeek } = result;
  const link = `https://openrent.co.uk/${id}`;
  const imageUrlWithFallback = imageUrl ? `https://${imageUrl}` : 'https://via.placeholder.com/150';

  const likeRental = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike(!like);
  }

  return (
    <li className={cx(styles.resultItem, { [styles.new]: isNew })}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.resultItemContent}>
          <div className={styles.resultItemImage}>
            <img src={imageUrlWithFallback} />
          </div>
          <div className={styles.resultItemDetails}>
            <div className={styles.pricing}>
              <h3 className={styles.pricePM}>{rentPerMonth && formatPrice(rentPerMonth)} pcm</h3>
              <p className={styles.pricePW}>{rentPerWeek && formatPrice(rentPerWeek)} pw</p>
            </div>
            <h4 className={styles.resultItemTitle}>{title}</h4>

            <ul className={styles.summaryItems}>
              {bedCount && <li><BedIcon />{bedCount}</li>}
              {bathCount && <li><BathIcon />{bathCount}</li>}
              {details && <li>• {details[details.length - 1]}</li>}
            </ul>
            <ul className={styles.transportLinks}>
              <li><img src={tfl} /> Rickmansworth ~ 20min walk</li>
              {/* <li><img src={nationalRail} /> Rickmansworth</li> */}
            </ul>
            <button
              className={styles.heartButton}
              onClick={likeRental}
              aria-label={like ? 'Unlike' : 'Like'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={like ? '#da4040' : 'rgba(255,255,255,0.4)'}
                stroke="#da4040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.heartIcon}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            {isNew && <span className={styles.newBadge}>New</span>}
          </div>

        </div>
      </a>
    </li>
  );
}