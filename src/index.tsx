import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Themed } from "theme";
import { Localised } from "locale";
import { User } from "controllers";

import "styles/index.css";
import "styles/fonts.css";
import "styles/shake.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Localised>
        <Themed themes={["light", "dark"]}>
          <User>
            <App />
          </User>
        </Themed>
      </Localised>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
