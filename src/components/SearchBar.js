import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchStyles = {
    flexGrow: 1,
    margin: '0 10px',
    padding: '5px',
  };

  // Call fetchData when searchQuery changes
  useEffect(() => {
    // Function to fetch data based on the search query
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=10`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result.results);

        // Set the fetched data in the results state
        setResults(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <div>
      <input
        style={searchStyles}
        type="text"
        placeholder="Search for videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h2>Search Results:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : Array.isArray(results.results) && results.results.length > 0 ? (
        <ul>
          {results.results.map((video, index) => (
            // <li key={index}>{video.video}</li>
            <video width="320" height="240" controls>
            <source src={video.video} type="video/mp4"/>
          </video>


          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}


      {/* <h3>First heading is: {results.results[0].heading}</h3> */}

    </div>
  );
};

export default SearchBar;
