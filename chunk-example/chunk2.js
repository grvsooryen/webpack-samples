// some async loaded module
function component() {
    const element = document.createElement('h1');
    element.innerHTML = "Chunk 2 Loaded";
    return element;
  }
  
  document.body.appendChild(component());