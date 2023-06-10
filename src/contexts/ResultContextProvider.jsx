import { createContext, useContext, useState } from 'react';

const ResultContext = createContext(null);

export const ResultContextProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const cx = import.meta.env.VITE_CX;
  const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=`;

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // type: /search, /images, /news, /videos.
  // query: the actual search term when they type into search bar.
  const getResults = async (type, query) => {
    setIsLoading(true);

    const endPoint = `${baseUrl}${query}`;

    const response = await fetch(endPoint, {
      method: 'GET',
    });
    const data = await response.json();

    console.log(data);

    setResults(data.items);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
