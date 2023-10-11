import { Elysia } from "elysia";

const posts = new Elysia({ prefix: "/posts" })
  .get("/", () => {
    return "Get Posts";
  })
  .post("/", () => {
    return "Post Posts";
  });

export default posts;
