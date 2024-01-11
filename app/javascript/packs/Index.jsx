// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { render } from "react-dom";
import App from "../common/App"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "../common/store";
// import HelloWorld from "../common/HelloWorld";



document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store()}>
      <BrowserRouter>
        <App />
        {/* <HelloWorld/> */}
      </BrowserRouter>
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
