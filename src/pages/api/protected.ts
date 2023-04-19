import { getSession,useSession } from "next-auth/react";  // admit I don't understand why this works on server side
import { NextApiRequest } from "next";

//JDO: I'm trying to get the apikey from the server side and store it in the token
 const handler = async (req: any, res: any) => {
  const session = await getSession({ req });
  if (session) return res.send(session);
  return res.send("not authenticated");
};

export default handler;