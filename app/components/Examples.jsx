var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examples location to try</p>
        <ol>
          <li>
            <Link to="/?location=Valparaiso">Valparaíso, Chile</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brasil</Link>
          </li>

        </ol>
      </div>
    );
  }
});


module.exports = Examples;
