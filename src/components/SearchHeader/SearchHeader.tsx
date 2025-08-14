import { Button } from "../Button/Button";

import { FilterIcon } from "../../icons/Filter/Filter";

import styles from "./SearchHeader.module.scss";

export const SearchHeader = () => {
  return (
    <div className={styles.searchHeader}>
      <div className={styles.searchHeaderContent}>
        <input className={styles.searchInput} name="search" type="search" placeholder="Enter a location to search" />
        <div className={styles.controls}>
          <div className={styles.sort}>
            <label className={styles.sortLabel} htmlFor="sort">Sort by:</label>
            <select className={styles.sortSelect} id="sort">Sort by
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="earliestAvailable">Earliest Available</option>
            </select>
          </div>
          <Button icon={<FilterIcon />} label="Filters" size="small" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
