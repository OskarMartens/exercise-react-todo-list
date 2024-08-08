import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components/App";
import CreateTodoPage from "./pages/CreateTodoPage/CreateTodoPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<CreateTodoPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);
