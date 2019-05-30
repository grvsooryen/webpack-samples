import "./customStyles.css";

function createHeader() {
    const headerElement = document.createElement('h1');
    headerElement.innerHTML = "Webpack Loaders!";
    return headerElement;
  }
  
  document.body.appendChild(createHeader());