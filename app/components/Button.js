const React = require('react');

function Button(props) {
  return (
    <div style={styles} onClick={props.onClick} className="btn btn-default" data-size={props.size} data-value={props.value}>
      { props.label }
    </div>
  )
}

const styles = {
  margin: '.5em'
}

module.exports = Button;
