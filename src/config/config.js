import dotenv from 'dotenv';

dotenv.config();
const config = {
    uriString : process.env.URI_STRING,
    claveSecreta : process.env.SECRET_SESSION_KEY,
    tokenSecreta: process.env.SECRET_TOKEN_KEY
}
export default config