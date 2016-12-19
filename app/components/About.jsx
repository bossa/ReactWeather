var React = require('react');

var About = React.createClass({
  render: function () {
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>App on ReactJS.</p>
        <p>
          Here are come some of the tools I used:
        </p>
        <ul>
          <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used</li>
          <li></li>
        </ul>
      </div>
    );
  }
});
//
// var About =  function (props) {
//   return (
//     <h3>About Component</h3>
//   );
// };

// var About = (props) => {
//   return (
//     <h3>About Component</h3>
//   )
// };

//var About = (props) => <h3>About Component!</h3>;

module.exports = About;
