import { MainPage } from '../pages/MainPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const routes = [
  {
    element: <MainPage />,
    path: '/',
  },
  {
    element: <NotFoundPage />,
    path: '*',
  },
]
