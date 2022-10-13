import { Route, Switch } from 'react-router-dom'

import { EditContact } from './pages/edit-contact'
import { NewContact } from './pages/new-contact'
import { Home } from './pages/home'

export function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  )
}
