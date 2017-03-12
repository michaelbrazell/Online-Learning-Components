var React = require('react');
var GroupCard = require('GroupCard');
var GroupProgress = require('GroupProgress');
var TrendingProblems = require('TrendingProblems');

var Main = (props) => {
  return (
    <div>
      <h2>Group Card</h2>
      <GroupCard />
      <h2>Group Progress</h2>
      <GroupProgress />
      <h2>Trending Problems</h2>
      <TrendingProblems />
    </div>
  );
}

module.exports = Main;
