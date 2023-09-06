import React, { useState, useEffect } from 'react';
import Header from './Header'
import { Card } from './Card';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchStyles = {
    flexGrow: 1,
    margin: '0 10px',
    padding: '5px',
    border:'5px solid black',
    borderRadius:'50px',
    height:'50px',
    width:'500px',
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

  //console.log("results",results.results[0].heading);

  return (
    <div >
      <Header/>

      <div style={{margin:'5px 5px 5px 5px'}}>
     <center>
      <h1>Search For Exercises</h1>
     <input
        style={searchStyles}
        type="text"
        placeholder="Search for videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      

      <h1 style={{color:'white'}}>Search Results:</h1>
      {loading ? (
        <p style={{color:'white'}}>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : Array.isArray(results.results) && results.results.length > 0 ? (
        <ul>
          {results.results.map((index) => (

            // <li key={index}>{video.video}</li>
          //   <video width="320" height="240" controls>
          //   <source src={video.video} type="video/mp4"/>
          // </video>

          <Card heading={index.heading} videoUrl={index.video} tags={index.tags} />
         // heading={results.results.heading} videoUrl={video.video} tags={results.results.tags}


          ))}
        </ul>
      ) : (
        <p style={{color:'white'}}>No results found.</p>
      )}</center> 
      </div>
      

    </div>
  );
};

export default SearchBar;
