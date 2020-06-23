class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Andy" from="Becky" />
        <Hello to="Cindy" from="David" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
