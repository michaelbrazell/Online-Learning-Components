var React = require('react');
var ReactDOM = require('react-dom');
// var Main = require('Main');
// If skipping main...
var GroupCard = require('GroupCard');
var GroupProgress = require('GroupProgress');
var TrendingProblems = require('TrendingProblems');

// App CSS
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <Main />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <GroupCard />,
  document.getElementById('group_card')
);
// ReactDOM.render(
//   <GroupProgress />,
//   document.getElementById('group_progress')
// );
// ReactDOM.render(
//   <TrendingProblems />,
//   document.getElementById('trending_problems')
// );
