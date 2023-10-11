import React, { useEffect, useState } from "react";
import { edenTreaty } from "@elysiajs/eden";
import type { App } from "../../Elysia/src/index";
import "./App.css";

const app = edenTreaty<App>("http://localhost:8000");

function AppReact() {
  const [res, setRes] = useState<{ name: string }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await app.users[""].get();
    if (response.data !== null) {
      setRes(response.data);
    }
  }

  return <pre>{JSON.stringify(res, null, 3)}</pre>;
}

export default AppReact;
