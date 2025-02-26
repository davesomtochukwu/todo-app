import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles.css";
import App from "./App.jsx";
import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = "nJniMVJCbMcT2bqRll5RKJ2gzB3xzXLL0jok25el";
const PARSE_JAVASCRIPT_KEY = "vLlOsw0GYpDU2inSgYgSgyZx7XyzRzBEbiYzQ1HZ";
const PARSE_SERVER_URL = "https://parseapi.back4app.com/";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_SERVER_URL;

export default Parse;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
