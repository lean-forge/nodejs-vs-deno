const url = 'http://hn.algolia.com/api/v1/search?query=typescript';
 
fetch(url)
  .then((result) => result.json())
  .then((result) => console.log(result.hits));