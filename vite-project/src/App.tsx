import React from "react";
import "./App.css";
import { edenTreaty } from "@elysiajs/eden";

import type { App } from "../../Elysia/src/index";

const app = edenTreaty<App>("http://localhost:8000");

function AppReact() {
  async function data() {
    const data = await app.users[""].get();
    console.log(data);
  }

  data();

  return <>Hallo</>;
}

export default AppReact;
