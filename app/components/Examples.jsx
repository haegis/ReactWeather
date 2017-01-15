var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Montreal,CA">Montreal, CA</Link>
        </li>
        <li>
          <Link to="/?location=London,uk">London, UK</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
