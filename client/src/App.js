// ___React___________________________________________________________________________________________________________
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// ___Components______________________________________________________________________________________________________
import Auth from './components/auth/Auth';
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import TaskView from './components/TaskView';
import AddTask from "./components/add-task/AddTask";
import EditTask from "./components/edit-task/EditTask";
import Groups from "./components/groups/Groups";
import GroupView from "./components/GroupView";
import AddGroup from "./components/add-group/AddGroup";
import EditGroup from "./components/edit-group/EditGroup";
import { useSelector } from 'react-redux';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Header /> }>
      <Route path="tasks" element={ <Tasks /> } />
      <Route path="tasks/:id" element={ <TaskView /> } />
      <Route path="tasks/add-task" element={ <AddTask /> } />
      <Route path="tasks/:id/edit-task" element={ <EditTask /> } />
      <Route path="groups" element={ <Groups /> } />
      <Route path="groups/:id" element={ <GroupView /> } />
      <Route path="groups/add-group" element={ <AddGroup /> } />
      <Route path="groups/:id/edit-group" element={ <EditGroup /> } />
    </Route>
  )
)

const App = () => {

  const token = useSelector(state => state.auth.accessToken);

  return (
    <>
      { !token && <Auth /> }
      { token && <RouterProvider router={ router } /> }
    </>
  );
}

export default App;
