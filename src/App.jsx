import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import HomePage from './Component/Homepage';
import EditEventPage from './Component/EditEventPage';
import EventDetailsPage from './Component/EventDetailsPage';
import EventPage from './Component/EventPage';
import NewEventPage from './Component/NewEventPage';
import MainRoot from './Component/MainRoot';
import ErrorPage from './Component/Error';

function App() {
 
const routes = createBrowserRouter([
{
  path:'/',
   errorElement:<ErrorPage/>,
   element:<MainRoot/>,
   children:[
    {path:'/',element:<HomePage/>},
    {path:'/events',element:<EventPage/>},
    {path:'/events/:id',element:<EventDetailsPage/>},
    {path:'/events/new',element:<NewEventPage/>},
    {path:'/events/:editID/edit',element:<EditEventPage/>},
  ]
  
}
])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
