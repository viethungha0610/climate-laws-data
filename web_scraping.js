const rp = require('request-promise');
const url = 'https://www.climate-laws.org/legislation_and_policies';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });