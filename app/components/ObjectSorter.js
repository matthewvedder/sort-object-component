const React = require('react');

const ObjectSorter = React.createClass({
  getInitialState() {
  return {
    stars: [
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

  render() {
    return (
      <div>
        <div>{ makeList(this.state.stars) }</div>
        <Button onClick={this.handleClick} label="C" value="clear" />
        <Button onClick={this.handleClick} label="7" value="7" />
        <Button onClick={this.handleClick} label="4" value="4" />
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
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return sorted
}

module.exports = ObjectSorter;
