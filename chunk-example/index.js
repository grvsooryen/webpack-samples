// some module
import("./chunk1");
import("./chunk2");

// some async loaded module
function component() {
    const element = document.createElement('h1');
    element.innerHTML = "Index Page Loaded";
    return element;
  }
  
  document.body.appendChild(component());