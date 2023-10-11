import { Elysia } from "elysia";

const users = new Elysia({ prefix: "/users" })
  .get("/", () => {
    return [{ name: "John Doe" }, { name: "Jane Doe" }, { name: "John Smith" }];
  })
  .post("/", () => {
    return "Post Users";
  });

export default users;
