import Parse from 'parse';

const PARSE_APPLICATION_ID = 'nJniMVJCbMcT2bqRll5RKJ2gzB3xzXLL0jok25el';
const PARSE_JAVASCRIPT_KEY = 'vLlOsw0GYpDU2inSgYgSgyZx7XyzRzBEbiYzQ1HZ';
const PARSE_SERVER_URL = 'https://parseapi.back4app.com/';

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_SERVER_URL;

export default Parse;
