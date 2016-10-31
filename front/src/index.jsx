import { setNavigation, setRoutes, deleteNavigation, deleteRoutes, setConfig } from './../../../../core/toolboxFront.js';

var conf = require('./../../config/config');
require('./languages/languages');

import Routes from './routes/routes';
import Navigation from './routes/navigation';
import Config from './routes/config';

setNavigation(Navigation, conf.name);
setRoutes(Routes);
setConfig(conf.name, Config);

// event for delete plugin
window.addEventListener(conf.name + ':delete', function (e) {
  deleteRoutes(Routes);
  deleteNavigation(Navigation);
}, false);
