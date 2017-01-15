var React = require("react");

var WeatherForm = React.createClass({
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" />
            <button>Get weather</button>
          </div>
        </form>
      </div>
    );
  },

  onFormSubmit: function(event) {
    event.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  }

});

module.exports = WeatherForm;
