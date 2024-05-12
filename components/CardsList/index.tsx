'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults, setError } from '@/app/features/searchResultsSlice';
import { useSearchReposQuery } from '@/app/services/github';
import ReactPaginate from 'react-paginate';
import { Repo } from './interface';
import Card from '../Card';
import Search from '../Search';
import styles from './styles.module.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { repos, isLoading, error } = useSelector((state: any) => state.searchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading: isLoadingQuery, refetch } = useSearchReposQuery({ searchTerm, page: currentPage });

  useEffect(() => {
    if (data) {
      dispatch(setSearchResults(data));
    } else {
      dispatch(setError('No results found'));
    }
  }, [data, dispatch]);

  const handlePageChange = ({ selected }:any) => {
    const selectedPage: number = selected;
    setCurrentPage(selectedPage + 1);
    refetch();
  };

  const currentItems = repos?.items;

  return (
    <div>
      <Search onSearch={setSearchTerm} />
      {isLoading || isLoadingQuery ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : repos?.items?.length > 0 ? (
        <div>
          <div className={styles.cardsList}>
            {currentItems?.map((repo: Repo) => (
              <Card
                key={repo.id}
                repoName={repo.name}
                ownerName={repo.owner.login}
                starCount={repo.stargazers_count}
              />
            ))}
          </div>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={Math.ceil(repos?.total_count / 10)}
            onPageChange={handlePageChange}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            forcePage={currentPage - 1}
          />
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default CardsList;
