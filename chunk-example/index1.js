// some module
import("./chunk2");
import("./chunk1");

// some async loaded module
function component() {
    const element = document.createElement('h1');
    element.innerHTML = "Index 1 Loaded";
    return element;
  }
  
  document.body.appendChild(component());
