import "./App.css";
import Editor from "./components/Editor";
import React from "react";

class App extends React.Component {
  state = {
    xml: '<center>\n  <img src="https://cutt.ly/JbMvJKT" />\n  <h1>Hello World!</h1>\n</center>',
    css: "h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n}",
  };

  handleChange = (value, language) => {
    this.setState({ [language]: value });
  };

  render() {
    let { xml } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Code Editor</h1>
          <h2>You can write and preview HTML and CSS!</h2>
        </header>
        <Editor
          language="xml"
          value={xml}
          displayLabel="html"
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
