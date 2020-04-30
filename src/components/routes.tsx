import React from 'react'
import { Switch, Route } from 'react-router-dom'

interface Props {
  
}

const Routes = (props: Props): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/settings" />
      <Route path="/about" />
      <Route />
    </Switch>
  )
}

export default Routes
