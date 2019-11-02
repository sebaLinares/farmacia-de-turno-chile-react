import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Regiones from './pages/Regiones';
import Comunas from './pages/Comunas';
import Farmacias from './pages/Farmacias';
import Farmacia from './pages/Farmacia';

const Routes = ({
  filterComunasByRegion,
  comunas,
  getFarmaciasFromComuna,
  farmaciasEnComunaElegida,
}) => (
  <Router>
    <Switch>
      <Route exact path="/" render={props => <Inicio {...props} />} />
      <Route
        exact
        path="/regiones"
        render={props => <Regiones {...props} filterComunasByRegion={filterComunasByRegion} />}
      />
      <Route
        exact
        path="/comunas"
        render={props => (
          <Comunas {...props} getFarmaciasFromComuna={getFarmaciasFromComuna} comunas={comunas} />
        )}
      />
      <Route
        exact
        path="/farmacias"
        render={props => <Farmacias {...props} farmacias={farmaciasEnComunaElegida} />}
      />
      <Route exact path="/farmacia" render={props => <Farmacia {...props} />} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  filterComunasByRegion: PropTypes.func.isRequired,
  getFarmaciasFromComuna: PropTypes.func.isRequired,
  comunas: PropTypes.instanceOf(Array),
  farmaciasEnComunaElegida: PropTypes.instanceOf(Array),
};

Routes.defaultProps = {
  comunas: [],
  farmaciasEnComunaElegida: [],
};

export default Routes;
