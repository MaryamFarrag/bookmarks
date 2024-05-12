import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchInput(newValue);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      onSearch(newValue);
    }, 500);

    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
