var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation = (props) => {
  return (
    <div>
      <h1>Nav</h1>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get weather</IndexLink>
      <Link to="/About" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
      <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
    </div>
  );
}

module.exports = Navigation;
