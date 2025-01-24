import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <>
      <div className={styles.root}>
        <IoIosSearch className={styles.icon} />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.input}
          placeholder="Поиск пиццы..."
        />
        {searchValue && (
          <IoIosClose
            onClick={() => setSearchValue("")}
            className={styles.clear}
          />
        )}
      </div>
    </>
  );
};

export default Search;
