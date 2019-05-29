import "./test.css";

function component() {
    const element = document.createElement('h1');
    element.innerHTML = "Webpack Loaders";
    return element;
  }
  
  document.body.appendChild(component());