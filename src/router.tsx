import { Route, Routes } from 'react-router-dom'

import { EditContact } from './pages/edit-contact'
import { NewContact } from './pages/new-contact'
import { Home } from './pages/home'

export function Router () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewContact />} />
      <Route path='/edit/:id' element={<EditContact />} />
    </Routes>
  )
}
