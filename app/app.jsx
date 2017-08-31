var React = require('react');
var ReactDOM = require('react-dom');
var GroupCard = require('GroupCard');

function renderGroups(elem, columnData, jsonData) {
  ReactDOM.render(
    <GroupCard columns={columnData} groupsData={jsonData} />,
    document.getElementById(elem)
  );
}

module.exports = renderGroups;
window.renderGroups = renderGroups;