# Modern_JavaScript

Get the Boilerplate for the Modern_JavaScript

In this repository you can get the boilerplat for modern javascript.
In the public folder we implimented HTML5 snippets to build this application.

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JavaScript</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- code goes here -->
  </body>
</html>
```

we serve this file in the browser to execute application.
Index.js file is the entry point of the application. You can create the custom file as well to customize entry point.
Our entry point is ./src folder.

In index.js file we had created a function to create an elements and append it in the root division tag.

```javascript
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
```

we are using sass and compile it in css using loaders.
Webpack help use to import css into javascript file.

index.scss

```scss
// sass for styling
$background-color: lightblue;
$font-family: "Segoe UI", "cursive";

body {
  background: $background-color;
  font-family: $font-family;
}

#root {
  text-align: center;
  padding: 2em;
}
```

That's it.
just clone this application and get started with Modern Javascript Application.

Thank You.
