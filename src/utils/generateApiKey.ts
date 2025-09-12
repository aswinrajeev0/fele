import { v4 as uuidv4 } from "uuid";

function generateApiKey() {
    return uuidv4()
}

console.log(generateApiKey());