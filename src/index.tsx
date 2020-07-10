import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import { Themed } from "theme";
import { Localised } from "locale";
import { User } from "controllers";

import "styles/index.css";
import "styles/fonts.css";
import "styles/shake.css";
import "styles/spin.css";

ReactDOM.render(
  <React.StrictMode>
    <Localised>
      <Themed themes={["light", "dark"]}>
        <User>
          <App />
        </User>
      </Themed>
    </Localised>
  </React.StrictMode>,
  document.getElementById("root")
);
