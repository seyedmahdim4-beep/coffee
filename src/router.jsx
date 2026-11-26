import { createBrowserRouter } from 'react-router'
import App from './App.jsx'
import Notfound from './pages/NotFound/NotFound.jsx'
import BlogsPage from './pages/BlogsPage/BlogsPage.jsx'
import Buying from './pages/Buying/Buying.jsx'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/blogs',
      element: <BlogsPage />,
    },
    {
      path: '/buying',
      element: <Buying />,
    },
    {
      path: '/*',
      element: <Notfound />,
    },
  ],
  {
    basename: '/coffee',
  }
)

export default router