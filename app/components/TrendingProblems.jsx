var React = require('react');

const TrendingProblems = React.createClass({
  getInitialState: function () {
    return {
      problems: trendingProblemsData
    }
  },
  render: function() {
    let problem = this.state.problems.map(function(problem, i) {
      return (
        <tr key={i}>
          <td>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="title-author">
                  <h4 className="problem-title add_margin_0">
                      <a href={"/matlabcentral/cody/problems/" + problem.id}>{problem.title}</a>
                  </h4>
                  <p className="add_margin_0"><small>Created by <a href={"/matlabcentral/cody/players/" + problem.created_by_profile_id} title="title">{problem.created_by_name}</a></small></p>
                  <p className="add_margin_0"><small>Problem Group: <a href={"/matlabcentral/cody/players/" + problem.problem_group_id}>{problem.problem_group_name}</a></small></p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                {/* <a href="#" className="tag_component">{problem.tag}</a> */}
                <a href="#" className="tag_component">Pizza</a>
                <a href="#" className="tag_component">fun</a>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <p className="add_font_color_mediumgray pull-right"><span className="icon-16 icon-like"></span>{problem.likes_count}</p>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <p className="add_font_color_mediumgray pull-right"><span className="icon-16 icon-account"></span>{problem.solvers_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )
    })
    return (
      <tbody>{problem}</tbody>
    )
  }
})

// Begin Trending Problems data
var trendingProblemsData =
[
  {
    "id": 62,
    "title": "Elapsed Time",
    "description": "Given two date strings d1 and d2 of the form yyyy/mm/dd HH:MM:SS (assume hours HH is in 24 hour mode), determine how much time, in decimal hours, separates them. Assume d2 is always later than d1.\n\nExample:\n\n Input d1 = '2010/12/14 12:00:00'\n Input d2 = '2010/12/14 13:06:36'\n Output elapsed is 1.11",
    "created_by_name": "Cody Team",
    "created_by_profile_id": 3251402,
    "problem_group_id": 2,
    "problem_group_name": "Cody Challenge",
    "tags": [
      "time"
    ],
    "likes_count": 5,
    "solvers_count": 666
  },
  {
    "id": 141,
    "title": "Solve the Sudoku Row",
    "description": "*Description*\r\n\r\nA simple yet tedious task occurs near the end of most Sudoku-solving algorithms, computerized or manual. The task is, given the row (or column or square) of a Sudoku puzzle with only a single number missing, fill in the missing number and return a completed row.\r\n\r\nFor more information regarding Sudoku, refer to the <http://en.wikipedia.org/wiki/Sudoku Wikipedia Entry for Sudoku>.\r\n\r\nThe input will be in the form of a vector (row or column) or a 9x9 matrix and the output has to have the same dimensionality as the input. Blank entries are signified with the number 0. There will always be one and only one blank entry in the input.\r\n\r\n*Example*\r\n\r\n     input  = [ 1 2 3 4 0 6 7 8 9 ];\r\n     output = [ 1 2 3 4 5 6 7 8 9 ]; ",
    "created_by_name": "@bmtran",
    "created_by_profile_id": 2722350,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "sudoku",
      "solve",
      "logic",
      "collection"
    ],
    "likes_count": 20,
    "solvers_count": 629
  },
  {
    "id": 68,
    "title": "Kaprekar Steps",
    "description": "6174 is the <http://en.wikipedia.org/wiki/6174_%28number%29 Kaprekar constant>. All natural numbers less than 10,000 (except some with same digits) can be reduced to 6174 in the following steps:\r\n\r\nOrder the digits of the number in descending and ascending order and compute the difference. Repeat the process till you get 6174.\r\n\r\n*Example*\r\n\r\nn = 2376\r\n\r\nDigits in descending order = 7632 \r\n\r\nDigits in ascending order = 2367\r\n\r\nStep1:\r\n\r\n >> 7632 - 2367\r\n ans = 5265\r\n\r\nStep 2:\r\n\r\n >> 6552 - 2556\r\n ans = 3996\r\n\r\nStep3:\r\n\r\n >> 9963 - 3699\r\n ans = 6264\r\n\r\nStep4\r\n\r\n >> 6642 - 2466\r\n ans = 4176\r\n\r\nStep5\r\n\r\n >> 7641 - 1467\r\n ans = 6174\r\n\r\nTotal number of steps = 5.\r\n\r\nYour function should return the number of Kaprekar steps for a given input.\r\nNumbers such as 2222 will end in zero. These numbers will never result in 6174. They should return Inf.",
    "created_by_name": "Cody Team",
    "created_by_profile_id": 3251402,
    "problem_group_id": 2,
    "problem_group_name": "Cody Challenge",
    "tags": [
      "matlab",
      "lookup table"
    ],
    "likes_count": 10,
    "solvers_count": 276
  },
  {
    "id": 325,
    "title": "2 b | ~ 2 b",
    "description": "Given a string input, output true if there are 2 b's in it, false if otherwise \r\n\r\nExamples:\r\n\r\n'Macbeth' -> false\r\n'Publius Cornelius Dolabella' -> true\r\n\r\nNote: sometimes it's the littlest things that matter....",
    "created_by_name": "Alan Chalker",
    "created_by_profile_id": 649595,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "strings",
      "basic matlab"
    ],
    "likes_count": 4,
    "solvers_count": 237
  },
  {
    "id": 52,
    "title": "What is the next step in Conway's Life?",
    "description": "Given a matrix A that represents the state of <http://en.wikipedia.org/wiki/Conway's_Game_of_Life Conway's game of Life> at one instant (time t=n), return the matrix B that represents the state of the game at the next instant (time t=n+1).\r\n\r\nAssume a toroidal game board, so the edges of the matrix wrap left to right and top to bottom.\r\n\r\nExamples:\r\n\r\n Input  A = [ 1   1   0   0\r\n              0   1   0   0\r\n              1   1   0   0\r\n              0   0   0   0 ]\r\n \r\n Output B = [ 1   1   0   0\r\n              0   0   1   0\r\n              1   1   0   0\r\n              0   0   0   0 ]\r\n\r\n Input  A = [ 0   1   1   0\r\n              1   1   1   0\r\n              0   0   1   0\r\n              0   0   0   0 ]\r\n \r\n Output B = [ 1   0   1   1\r\n              1   0   0   0\r\n              0   0   1   1\r\n              0   1   1   0 ]\r\n",
    "created_by_name": "Cody Team",
    "created_by_profile_id": 3251402,
    "problem_group_id": 2,
    "problem_group_name": "Cody Challenge",
    "tags": [
      "life",
      "automata"
    ],
    "likes_count": 10,
    "solvers_count": 220
  },
  {
    "id": 855,
    "title": "How many monitors are connected  ?",
    "description": "How to obtain the numbers of monitors connected to your computer ?",
    "created_by_name": "Jean-Marie Sainthillier",
    "created_by_profile_id": 343082,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "monitor"
    ],
    "likes_count": 0,
    "solvers_count": 84
  },
  {
    "id": 868,
    "title": "Replace all zeros and NaNs in a matrix with the string 'error'",
    "description": "Given a numeric input matrix A, possibly containing some zero values and some NaNs, replace any occurrences of zero or NaN with the character string 'error'.\r\nThe output should be a cell array C of the same size as the input matrix. Each cell of the output cell array should either contain the corresponding entry of A if this is not zero or NaN, or the string 'error' otherwise.\r\n\r\nExample:\r\n\r\nIf A = [1 0; NaN 1], then the output C should be the cell array C = {1, 'error'; 'error', 1}.\r\n\r\n",
    "created_by_name": "Ken Deeley",
    "created_by_profile_id": 3372125,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "cell arrays",
      "cellfun",
      "logical indexing"
    ],
    "likes_count": 0,
    "solvers_count": 63
  },
  {
    "id": 536,
    "title": "Cody Computer Part 2 - Get the license number of Cody Computer",
    "description": "In the Cody computer investigation party, you may have already solved :\r\n\r\n<http://www.mathworks.com/matlabcentral/cody/problems/522-guess-the-system-font-used-by-uipanel Problem 522. Cody Computer Part 1 - Guess the system font used by uipanel> \r\n\r\n***********************************************\r\n\r\nThis is the second problem to solve :\r\nThe *ver* command returns the Version information for MathWorks products .\r\nThe aim of this Cody problem is to return the license number of the Cody computer.\r\n\r\nThe output of the test suite will show you the license number. You could be surprised to see that TMW has computers with a license number equals to ZERO!",
    "created_by_name": "Aurelien Queffurust",
    "created_by_profile_id": 2391181,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "license number;piracy;"
    ],
    "likes_count": 1,
    "solvers_count": 42
  },
  {
    "id": 429,
    "title": "function on a moving window",
    "description": "Create a function that applies an operation (such as @sum, @mean, @std, @norm etc) to a moving window of the data.\r\n\r\nFirst example:\r\n\r\n    filtered = mopt(@mean,1:6,1,2)\r\n\r\n    Then filtered = [NaN 2.5000 3.5000 4.5000 NaN NaN]\r\n\r\nThis is the moving average.\r\n\r\nSecond example:\r\n\r\n    filtered = mopt(@std,[0.2 0.8 0.7 1.1 1.1 1.0 0.2],2,0)\r\n\r\n    Then filtered = [NaN NaN 0.3215 0.2082 0.2309 0.0577 0.4933]\r\n\r\nThis is the 'moving standard error'.\r\n\r\nThe first arg of mopt is a function handle. It must be a function that takes a vector as input and produces a scalar as output.\r\n\r\nThe second arg is the vector of data.\r\n\r\nThe third and fourth args are the lags and leads that determin the size of the moving window.\r\n",
    "created_by_name": "Yvan Lengwiler",
    "created_by_profile_id": 1003439,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "moving average"
    ],
    "likes_count": 0,
    "solvers_count": 26
  },
  {
    "id": 561,
    "title": "Find the jerk",
    "description": "No, it's not the author of this problem...\r\n\r\nJerk is the rate of change in acceleration over time of an object.  So, if given the position of an object over time in the form of a 1-by-N vector, return the indices i where there is nonzero jerk.  \r\n\r\nSuper rad bonus hint: The signal you need to find the jerk of will be given by the variable sig, created with the commands \r\n\r\n  h = 0.065; % stepsize\r\n  t = -10:h:10;\r\n  sigCoefs = 2*rand(1,3)-1;\r\n  sig = polyval(sigCoefs,t);\r\n  breakPoint = randi(length(sig)-2)+1;\r\n  sig(breakPoint) = (1.01)*sig(breakPoint); % this creates a nonzero jerk\r\n \r\nCheck the signal visually with\r\n\r\n  plot(t,sig,'k.-')\r\n\r\nNow, using just sig, determine breakPoint.\r\n ",
    "created_by_name": "Kye Taylor",
    "created_by_profile_id": 2972012,
    "problem_group_id": 1,
    "problem_group_name": "Community",
    "tags": [
      "jerk",
      "physics",
      "derivative",
      "finite difference"
    ],
    "likes_count": 0,
    "solvers_count": 23
  }
]

// End trending problems data

module.exports = TrendingProblems;
