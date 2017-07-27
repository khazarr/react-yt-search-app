import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCWHsVt6OBwZLNYXzSj8w94gipeYu9HWXw';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

//Create a new compotnent
const App =  () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

//Take this component and put it on a page
ReactDOM.render(<App />,document.querySelector('.container'));
