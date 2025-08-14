import { useState } from 'react';

import data from '../../data.json';
import map from '../../assets/map-results.png';
import mapMob from '../../assets/map-results-mob.png';
import { SearchResultsItem } from '../SearchResultsItem/SearchResultsItem';

import styles from "./SearchResults.module.scss";

export const SearchResults = () => {
  const [showMap, setShowMap] = useState(false);
  const results = data;

  return (
    <div className={styles.searchResults}>
      <p className={styles.resultsCount}><span className={styles.count}>{results.length}</span> results found for your search: <span className={styles.searchLocation}>"Rickmansworth"</span></p>
      <div className={styles.resultsMap}>
        <img src={map} alt="Map of search results" className={styles.mapImage} />
      </div>
      {showMap
        ? <div className={styles.resultsMapMobile}>
          <img src={mapMob} alt="Map of search results" className={styles.mapImage} />
        </div>
        : <ul className={styles.resultsList}>
          {results.map((result) => <SearchResultsItem key={result.id} result={result} />)}
        </ul>}
      {/* As this is a demo, this doesn't cover the edge case of turning map view on and changing viewport to desktop */}
      <button className={styles.toggleMapButton} onClick={() => setShowMap(!showMap)}>{showMap ? 'Show list' : 'Show map'}</button>
    </div>
  );
}