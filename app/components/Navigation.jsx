var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get weather</IndexLink>
            </li>
            <li>
              <Link to="/About" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
            </li>
            <li>
              <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Location" ref="location" />
                </li>
                <li>
                  <input type="submit" className="button" value="Get weather" />
                </li>
              </ul>
            </form>
        </div>
      </div>
    );
  },

  onSearch : function(event) {
    event.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = "";
      window.location.hash = "#/?location=" + encodeURIComponent(location);
    }
  }


});

module.exports = Navigation;
