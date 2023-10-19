import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { logger } from "@bogeychan/elysia-logger";
import users from "./handlers/users";
import posts from "./handlers/posts";

const app = new Elysia()
  .use(cors())
  .use(logger())
  .get("/", () => "Hello Elysia")
  .post("/", () => "Post Elysia")
  .use(users)
  .use(posts);

export default app;
