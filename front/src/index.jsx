import { setNavigation, setRoutes, deleteNavigation, deleteRoutes } from './../../../../core/toolboxFront.js';

import Routes from './routes/routes';
import Navigation from './routes/navigation';

setNavigation(Navigation);
setRoutes(Routes);

// event for delete plugin
window.addEventListener('motion:delete', function (e) {
  deleteRoutes(Routes);
  deleteNavigation(Navigation);
}, false);
