import { Elysia } from "elysia";
import users from "@/controllers/users";
import posts from "@/controllers/posts";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .post("/", () => "Post Elysia")
  .use(users)
  .use(posts);

export default app;
