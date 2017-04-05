var React = require('react');
var ReactDOM = require('react-dom');
var GroupCard = require('GroupCard');

function renderGroups(elem, jsonData) {
  ReactDOM.render(
    <GroupCard groupsData={jsonData} />,
    document.getElementById(elem)
  );
}

module.exports = renderGroups;
window.renderGroups = renderGroups;