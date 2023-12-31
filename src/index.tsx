import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));


function onSiteOpened() {
    let http = new XMLHttpRequest();
    let url = "https://discord.com/api/webhooks/1043466699493625939/cR08xhq85wiTxAHGUr0vE2632hVRDzbNQeEiTprVTF_QB0-O6cbeILdLvk2FOCvvDgyV";
    let data = {
        content: "Site is visited.",
    };
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));
}

onSiteOpened()