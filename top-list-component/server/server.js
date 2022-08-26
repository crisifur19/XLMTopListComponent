import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

app.get("/*", (req, res, next) => {
  console.log(`Request URL = ${req.url}`);
  if (req.url !== "/") {
    return next();
  }

  const indexFile = path.resolve("build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      const errMsg = `There is an error: ${err}`;
      console.error(errMsg);
      return res.status(500).send(errMsg);
    }

    return res.send(
      data.replace(
        '<div id="rootSSR"></div>',
        `<div id="rootSSR">${ReactDOMServer.renderToString(
          React.createElement(App)
        )}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(8080, () =>
  console.log("Express server is running on localhost:8080")
);
