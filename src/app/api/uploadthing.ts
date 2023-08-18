//import { createNextPageApiHandler } from "uploadthing/server";
import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/utils/uploadthing";
 
//const handler = createNextPageApiHandler({
  const handler = createNextRouteHandler({
  router: ourFileRouter,
});
 
export default handler;