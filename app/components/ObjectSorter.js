const React = require('react');
const Button = require('./Button');

const ObjectSorter = React.createClass({
  getInitialState() {
  return {
    array: [
      { Name: 'ST-78', Distance: 89.4, Color: '#899C46' },
      { Name: 'SF-32', Distance: 61.5, Color: '#CC9026' },
      { Name: 'SG-22', Distance: 52.3, Color: '#8B9044' },
      { Name: 'SA-11', Distance: 49.2, Color: '#A9B0A1' },
      { Name: 'BT-88', Distance: 84.1, Color: '#899A4B' },
      { Name: 'SS-09', Distance: 78.0, Color: '#8A90A6' },
      { Name: 'SG-34', Distance: 17.8, Color: '#6B2D76' },
      { Name: 'SK-12', Distance: 20.7, Color: '#C99012' },
      { Name: 'KT-89', Distance: 53.5, Color: '#8C9072' }
    ]
  }
},

handleClick: function(e) {
  var value = e.target.getAttribute('data-value');
  this.setState({ array: sortList(this.state.array, value) });
},

  render() {
    return (
      <div>
        <div>
          { makeList(this.state.array) }
        </div>
        <Button onClick={this.handleClick} label="Name" value="Name" />
        <Button onClick={this.handleClick} label="Distance" value="Distance" />
        <Button onClick={this.handleClick} label="Color" value="Color" />
      </div>

    );
  }
});


function makeList(array) {
  const list = array.map((item) => {
    return (
      <p key={ item.Name }>
        <span>Name: { item.Name } </span>
        <span>Distance: { item.Distance } </span>
        <span>Color: { item.Color }</span>
      </p>
    )
  });
  return list
}

function sortList(items, key) {
  const sorted = items.sort(function(a, b) {
    let A = a[key].toString().toUpperCase();
    let B = b[key].toString().toUpperCase();

    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });

  return sorted
}

module.exports = ObjectSorter;
