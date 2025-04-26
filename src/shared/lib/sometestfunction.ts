import { arrayOfNumber } from "../api/openai/constants";

const test = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

function someTestFunction() {
  return arrayOfNumber.map((i) => test[i]).join("");
}

export { someTestFunction };
