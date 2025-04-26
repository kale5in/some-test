import { someTestFunction } from "@/shared/lib/sometestfunction";
import OpenAI from "openai";

const test = someTestFunction();
const client = new OpenAI({
  apiKey: test,
  dangerouslyAllowBrowser: true,
});

export { client };
