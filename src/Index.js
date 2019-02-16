/**    Entry point of your application   */
import "./Index.scss";

let h1 = elements("h1", "JavaScript Application");

// append element in the root component
const root = document.getElementById("root");
root.appendChild(h1);

// create element using functon
function elements(tagname, text) {
  let element = document.createElement(tagname);
  element.textContent = text;
  return element;
}
