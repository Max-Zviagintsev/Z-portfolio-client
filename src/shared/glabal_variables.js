const mode = 'loc'; //or 'prod'

const locURL = 'http://localhost:8000';
const prodURL = 'http://dev-z-portfolio.pantheonsite.io';

export const URL = (mode === 'loc') ? locURL : prodURL;