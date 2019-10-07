import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactContainer from './containers/ContactContainer';
import HomeContainer from './containers/HomeContainer';
import ProgramContainer from './containers/ProgramContainer';
import ExperienceContainer from './containers/ExperienceContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import NotFound from './components/NotFound';

export default () =>
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/Home" exact component={HomeContainer} />
    <Route path="/Program" exact component={ProgramContainer} />
    <Route path="/Experience" exact component={ExperienceContainer} />
    <Route path="/Register" exact component={RegistrationContainer} />
    <Route path="/Contact" exact component={ContactContainer} />
    <Route component={NotFound} />
  </Switch>;
