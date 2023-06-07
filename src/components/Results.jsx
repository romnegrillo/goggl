import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('search', 'romnegrillo');
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-col flex-wrap flex-grow">
          {results
            ? results.map((result, index) => {
                return (
                  <a key={index} href={result.link} target="__blank">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-2 dark:hover:bg-gray-600 hover:bg-gray-200 px-2 py-2 rounded">
                      <h2>
                        <span>{index + 1} - </span>
                        {result.title}
                      </h2>
                      <div>
                        <small>{result.link}</small>
                      </div>
                    </div>
                  </a>
                );
              })
            : ''}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
    default:
      return 'ERROR';
  }
};

export default Results;
