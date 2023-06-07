import { Switch, Route, Redirect } from 'react-router-dom';

import Results from './Results';

const SectionRoutes = () => {
  return (
    <div className=" flex-grow">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default SectionRoutes;
