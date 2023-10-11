import "./App.css";
import { edenTreaty } from "@elysiajs/eden";

import { App } from "../../Elysia/src/index";

const app = edenTreaty<App>("http://localhost:8000");

function AppReact() {
  const { data, error } = app.get();

  console.log(data, error);
  return <>Hallo</>;
}

export default AppReact;
