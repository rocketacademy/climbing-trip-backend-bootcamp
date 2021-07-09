import db from './models/index.mjs';

// import your controllers here
import initRoutesController from './controllers/routes.mjs';
import initTripsController from './controllers/trips.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const RoutesController = initRoutesController(db);
  const TripsController = initTripsController(db);

  app.get('/getroutes', RoutesController.getRoutes);
  app.get('/gettrips', TripsController.getTrips);
  app.get('/routes/:id', RoutesController.getTripRoutes);
  app.post('/addRoute', RoutesController.addRoute);
  app.post('/addDifficulty', RoutesController.addDifficulty);
}
