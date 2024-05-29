import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route element={route.element} key={route.path} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
