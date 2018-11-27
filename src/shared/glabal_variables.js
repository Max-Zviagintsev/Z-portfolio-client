const mode = 'prod'; //'loc' or 'prod'

const locURL = 'http://zportfolio.lndo.site';
const prodURL = 'http://dev-z-portfolio.pantheonsite.io';

export const URL = (mode === 'loc') ? locURL : prodURL;