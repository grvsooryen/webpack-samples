
function component() {
    const element = document.createElement('h1');
    element.innerHTML = "Webpack Html Plugin";
    return element;
  }
  
  document.body.appendChild(component());