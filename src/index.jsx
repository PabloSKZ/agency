import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";
import "antd/dist/antd.css";
import "./index.css";
import Nav from "./comp/Nav";
import About from "./comp/About";
import Works from "./comp/Works";
import { FormattedMessage } from "react-intl";
import StudyCase from "./comp/StudyCase";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "fr");
  }

  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const changeLang = () => {
    if (language === "fr") {
      setLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      setLanguage("fr");
      localStorage.setItem("language", "fr");
    }
  };

  const actualLang = () => {
    if (language === "fr") {
      return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/langfr-225px-Flag_of_the_United_Kingdom.svg.png" />
      );
    } else {
      return (
        <img src="https://cdn.webshopapp.com/shops/94414/files/52383156/drapeau-de-la-france.jpg" />
      );
    }
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <div>
          <Nav actualLang={actualLang} changeLang={changeLang} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" exact component={Works} />
            <Route path="/works/:client" component={StudyCase} />
          </Switch>
        </div>
      </Router>
    </IntlProvider>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>
        <FormattedMessage id="home.title" />
      </h2>
      <p>
        <FormattedMessage id="home.paragraph" />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
