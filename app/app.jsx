var React = require('react');
var ReactDOM = require('react-dom');
var GroupCard = require('GroupCard');

function renderGroups() {
  ReactDOM.render(
    <GroupCard />,
    document.getElementById('group_card')
  );
}

module.exports = renderGroups;
window.renderGroups = renderGroups;