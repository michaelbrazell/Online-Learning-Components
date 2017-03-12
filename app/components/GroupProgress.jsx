var React = require('react');

const GroupProgress = React.createClass({
  getInitialState: function () {
    return {
      groups: groupData
    }
  },
  render: function() {
    let group = this.state.groups.map(function(group, i) {
      return (
          (group.solved_count != null) ?
          (<div className="problem_group_progress add_margin_10" key={'group'+i}>
            <p className="add_margin_5"><a href={'/matlabcentral/cody/groups/' + group.id}>{group.name}</a></p>
            <div className="solved-progressbar">
      				<div className="progress add_margin_0">
      					<div className="progress-bar" role="progressbar" aria-valuenow={group.percentage_complete/100} aria-valuemin="0" aria-valuemax="100" style={{width: group.percentage_complete+"%"}}>{group.percentage_complete}
      					</div>
      				</div>
      			</div>
          </div>) :
          (<span className="problem_group_progress add_margin_10" key={i}></span>)
      )
    })
    return (
      <div>{group}</div>
    )
  }
});

/* Load groups data */
var groupData =
[
  {
    "id": 1,
    "name": "Community",
    "description": "Problems submitted by members of the MATLAB Central community.",
    "number_of_problems": 3047,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 2,
    "name": "Cody Challenge",
    "description": "Problems, submitted by the Cody team and initially hidden, that reveal more problems as you solve them.",
    "number_of_problems": 96,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 5,
    "name": "Tiles Challenge",
    "description": "Problems related to the Tiles Programming Contest. See http://www.mathworks.com/matlabcentral/contest/contests/36 ",
    "number_of_problems": 7,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 6,
    "name": "ASEE Challenge",
    "description": "Problems associated with the ASEE conference, June 10-13. Anyone is welcome to play!",
    "number_of_problems": 10,
    "solved_count": 5,
    "percentage_complete": 50
  },
  {
    "id": 7,
    "name": "CUP Challenge",
    "description": "Problems developed by MathWorks in collaboration with Cambridge University Press. The problems are suitable for GCSE and A-Level students. ",
    "number_of_problems": 11,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 8,
    "name": "Magic Numbers",
    "description": "This is a collection of problems from across Cody with the theme of special \"named\" numbers.",
    "number_of_problems": 19,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 9,
    "name": "Modeling & Simulation Challenge",
    "description": "Modeling & Simulation Challenge",
    "number_of_problems": 15,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 11,
    "name": "AU_Test",
    "description": "Solve the MATLAB Challenge\r\n\r\n<<https://www.rcc.uq.edu.au/system/storage/serve/1822/resbaz.png>>",
    "number_of_problems": 1,
    "solved_count": null,
    "percentage_complete": null
  },
  {
    "id": 12,
    "name": "Indexing I",
    "description": "The first collection of indexing problems, selected from problems submitted by members of the MATLAB Central community.",
    "number_of_problems": 27,
    "solved_count": null,
    "percentage_complete": null
  }
]

// End groups data

module.exports = GroupProgress;
