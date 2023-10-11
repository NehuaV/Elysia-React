import { Elysia } from "elysia";

const users = new Elysia({ prefix: "/users" })
  .get("/", () => {
    return "Get Users";
  })
  .post("/", () => {
    return "Post Users";
  });

export default users;
