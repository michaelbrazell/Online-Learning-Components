var React = require('react');

const GroupCard = React.createClass({
  getInitialState: function () {
    return {
      groups: this.props.groupsData.trending_groups
    }
  },
  render: function() {
    let group = this.state.groups.map(function(group, i) {
      function solvedStatus() {
        if (!group.solved_count == 0 || !group.solved_count == null ) {
          if (group.solved_count < group.problems_count) {
            return (
              <div className="panel-footer">
                <p className="pull-left add_font_color_mediumgray add_margin_0">{group.solved_count}/{group.problems_count} Problems</p>
                <div className="progress add_progress_small add_margin_0">
                  <div className="progress-bar" role="progressbar" aria-valuenow={group.percentage_complete / 100} aria-valuemin="0" aria-valuemax="100" style={{width: group.percentage_complete+"%"}}></div>
                </div>
              </div>
            )
          } else {
            return (
              <div className="panel-footer">
                <p className="pull-left add_font_color_green add_margin_0">Complete</p>
                <div className="progress add_progress_small add_margin_0">
                  <div className="progress-bar add_background_color_green" role="progressbar" aria-valuenow={group.percentage_complete / 100} aria-valuemin="0" aria-valuemax="100" style={{width: group.percentage_complete+"%"}}></div>
                </div>
              </div>
            )
          }
        } else {
          return (
            <div className="panel-footer">
              <p className="pull-left add_font_color_mediumgray add_margin_0">{group.problems_count} Problems</p>
            </div>
          )
        }
      }
      return (
        <div className="col-xs-12 col-sm-6 col-md-4" key={'group'+i}>
          <div className="panel panel-default add_text_wrapping group_overview " id={'group_' + group.id}>
            <div className="panel-heading add_background_cover" style={{backgroundImage: 'url("http://lorempixel.com/250/250/animals/")', height:'220px'}}>
            </div>
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
