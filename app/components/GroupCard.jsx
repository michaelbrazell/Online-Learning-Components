var React = require('react');
var axios = require('axios');

const API_URL = 'https://quarkbackend.com/getfile/michaelbrazell/codygroups';

const GroupCard = React.createClass({
  getInitialState: function () {
    return {
      groups: []
    }
  },
  componentDidMount: function () {
    var that = this;
    var requestUrl = `${API_URL}`;
    this.setState({
      groups: []
    });
    axios.get(requestUrl)
    .then(function(response){
      that.setState({
        groups: response.data
      })
    });
  },
  render: function() {
    let group = this.state.groups.map(function(group, i) {
      function solvedStatus() {
        if (group.solved_count != null && group.solved_count < group.number_of_problems) {
          return (
            <div className="panel-footer">
              <p className="pull-left add_font_color_mediumgray add_margin_0">{group.solved_count}/{group.number_of_problems} Problems</p>
              <div className="progress add_progress_small add_margin_0">
                <div className="progress-bar" role="progressbar" aria-valuenow={group.percentage_complete / 100} aria-valuemin="0" aria-valuemax="100" style={{width: group.percentage_complete+"%"}}></div>
              </div>
            </div>
          )
        } else if (group.solved_count != null && group.solved_count == group.number_of_problems ){
          return (
            <div className="panel-footer">
              <p className="pull-left add_font_color_green add_margin_0">Complete</p>
              <div className="progress add_progress_small add_margin_0">
                <div className="progress-bar add_background_color_green" role="progressbar" aria-valuenow={group.percentage_complete / 100} aria-valuemin="0" aria-valuemax="100" style={{width: group.percentage_complete+"%"}}></div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="panel-footer">
              <p className="pull-left add_font_color_mediumgray add_margin_0">{group.number_of_problems} Problems</p>
            </div>
          )
        }
      }
      return (
        <div className="col-xs-12 col-sm-6 col-md-4" key={'group'+i}>
          <div className="panel panel-default group_overview">
            <div className="panel-body">
              <h4 className="add_margin_5"><a href={'/matlabcentral/cody/groups/' + group.id}>{group.name}</a></h4>
              <p className="add_margin_40">{group.description}</p>
            </div>
              { solvedStatus() }
          </div>
        </div>
      )
    })
    return (
      <div className="row add_equal_heights">
        {group}
      </div>
    )
  }
});

module.exports = GroupCard;
