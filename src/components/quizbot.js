import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot, { Loading } from "react-simple-chatbot";
let questions = [];

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      difficulty1: "",
      question: "",
      ques1: "",
      ques1Choice1: "",
      ques1Choice2: "",
      ques1Choice3: "",
      ques1Choice4: "",
      ques1Correct: "",
      ques2: "",
      ques2Choice1: "",
      ques2Choice2: "",
      ques2Choice3: "",
      ques2Choice4: "",
      ques2Correct: "",
      ques3: "",
      ques3Choice1: "",
      ques3Choice2: "",
      ques3Choice3: "",
      ques3Choice4: "",
      ques3Correct: "",
      ques4: "",
      ques4Choice1: "",
      ques4Choice2: "",
      ques4Choice3: "",
      ques4Choice4: "",
      ques4Correct: "",
    };
  }

  componentDidMount() {
    const { steps } = this.props;

    // //QUES2-
    // this.setState({ques2:atob(loadedQuestions.results[0].question)})
    //       console.log(this.state.ques2)

    // let choices2 = [loadedQuestions.results[0].incorrect_answers]
    //       choices2.splice(random-1, 0, loadedQuestions.results[0].correct_answer)
    //   console.log(choices2)
    // this.setState({ques2Correct: atob(loadedQuestions.results[0].correct_answer)})
    // console.log(this.state.ques2Correct)

    // var choice21 = choices2[0][0]
    // this.setState({ques2Choice1: atob(choice21)})
    // console.log(this.state.ques2Choice1)

    // var choice22 = choices2[0][1]
    // this.setState({ques2Choice2: atob(choice22)})
    // console.log(this.state.ques2Choice2)

    // var choice23 = choices2[1]
    // this.setState({ques2Choice3: atob(choice23)})
    // console.log(this.state.ques2Choice3)

    // var choice24 = choices2[0][2]
    // this.setState({ques2Choice4: atob(choice24)})
    // console.log(this.state.ques2Choice4)

    // //QUES3-
    // this.setState({ques3:atob(loadedQuestions.results[2].question)})
    //       console.log(this.state.ques3)

    // let choices3 = [loadedQuestions.results[2].incorrect_answers]
    //       choices3.splice(random-1, 0, loadedQuestions.results[2].correct_answer)
    //   console.log(choices3)
    // this.setState({ques3Correct: atob(loadedQuestions.results[2].correct_answer)})
    // console.log(this.state.ques3Correct)

    // var choice31 = choices3[0][0]
    // this.setState({ques3Choice1: atob(choice31)})
    // console.log(this.state.ques3Choice1)

    // var choice32 = choices3[1]
    // this.setState({ques3Choice2: atob(choice32)})
    // console.log(this.state.ques3Choice2)

    // var choice33 = choices3[0][1]
    // this.setState({ques3Choice3: atob(choice33)})
    // console.log(this.state.ques3Choice3)

    // var choice34 = choices3[0][2]
    // this.setState({ques3Choice4: atob(choice34)})
    // console.log(this.state.ques3Choice4)

    // //QUES4-
    // this.setState({ques4:atob(loadedQuestions.results[3].question)})
    //       console.log(this.state.ques4)

    // let choices4 = [loadedQuestions.results[3].incorrect_answers]
    //       choices4.splice(random-1, 0, loadedQuestions.results[3].correct_answer)
    //   console.log(choices4)
    // this.setState({ques4Correct: atob(loadedQuestions.results[3].correct_answer)})
    // console.log(this.state.ques4Correct)

    // var choice41 = choices4[1]
    // this.setState({ques4Choice1: atob(choice41)})
    // console.log(this.state.ques4Choice1)

    // var choice42 = choices4[0][2]
    // this.setState({ques4Choice2: atob(choice42)})
    // console.log(this.state.ques4Choice2)

    // var choice43 = choices4[0][1]
    // this.setState({ques4Choice3: atob(choice43)})
    // console.log(this.state.ques4Choice3)

    // var choice44 = choices4[0][0]
    // this.setState({ques4Choice4: atob(choice44)})
    // console.log(this.state.ques4Choice4)
    // })
  }

  render() {
    return (
      <div className="dbpedia">
        <text>{this.state.ques1}</text>
      </div>
    );
  }
}
DBPedia.propTypes = {
  steps: PropTypes.object,
};

DBPedia.defaultProps = {
  steps: undefined,
};
class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    const { steps } = this.props;
    const { name } = steps;

    this.setState({ name });
  }
  render() {
    const { name } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Ques1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty2: "",
      ques1: "",
      ques1Choice1: "",
      ques1Choice2: "",
      ques1Choice3: "",
      ques1Choice4: "",
      ques1Correct: "",
    };
  }
  componentDidMount() {
    const { steps } = this.props;
    const difficulty2 = steps;
    this.setState({ difficulty2: difficulty2.value });
    console.log(this.state.difficulty2);
    const name = steps.name.value;
    fetch(
      `https://opentdb.com/api.php?amount=1&encode=base64&type=multiple&category=9&difficulty=${this.state.difficulty2}`
    )
      .then((res) => {
        return res.json();
      })
      .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
          const formattedQuestion = {
            question: loadedQuestion.question,
          };
        });

        this.setState({ ques1: atob(loadedQuestions.results[0].question) });
        console.log(this.state.ques1);
        var random = Math.floor(Math.random() * 4) + 1;

        //QUES1-
        let choices1 = [loadedQuestions.results[0].incorrect_answers];

        choices1.splice(
          random - 1,
          0,
          loadedQuestions.results[0].correct_answer
        );
        console.log(choices1);
        choices1.forEach((choice, index) => {
          loadedQuestions.results[0]["choice" + (index + 1)] = choice;
        });
        console.log(loadedQuestions.results[1]);
        this.setState({
          ques1Correct: atob(loadedQuestions.results[0].correct_answer),
        });

        console.log(this.state.ques1Correct);

        var choice1 = atob(choices1[1]);

        this.setState({ ques1Choice1: choice1 });

        console.log(this.state.ques1Choice1);

        var choice2 = atob(choices1[0][1]);
        this.setState({ ques1Choice2: choice2 });
        console.log(this.state.ques1Choice2);

        var choice3 = atob(choices1[0][0]);
        this.setState({ ques1Choice3: choice3 });
        console.log(this.state.ques1Choice3);

        var choice4 = atob(choices1[0][2]);
        this.setState({ ques1Choice4: choice4 });
        console.log(this.state.ques1Choice4);
      });
  }
  render() {
    const { name } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Question</h3>
        <text>{this.state.ques1}</text>
        <h3>Options:</h3>
        <text> A. {this.state.ques1Choice1} </text>
        <text> B. {this.state.ques1Choice2} </text>
        <text> C. {this.state.ques1Choice3} </text>
        <text> D. {this.state.ques1Choice4} </text>
      </div>
    );
  }
}

class Ques2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty2: "",
      ques1: "",
      ques1Choice1: "",
      ques1Choice2: "",
      ques1Choice3: "",
      ques1Choice4: "",
      ques1Correct: "",
    };
  }
  componentDidMount() {
    const { steps } = this.props;
    const difficulty2 = steps;
    this.setState({ difficulty2: difficulty2.value });
    console.log(this.state.difficulty2);
    const name = steps.name.value;
    fetch(
      `https://opentdb.com/api.php?amount=1&encode=base64&type=multiple&category=9&difficulty=${this.state.difficulty2}`
    )
      .then((res) => {
        return res.json();
      })
      .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
          const formattedQuestion = {
            question: loadedQuestion.question,
          };
        });

        this.setState({ ques1: atob(loadedQuestions.results[0].question) });
        console.log(this.state.ques1);
        var random = Math.floor(Math.random() * 4) + 1;
        //QUES1-
        let choices1 = [loadedQuestions.results[0].incorrect_answers];

        choices1.splice(
          random - 1,
          0,
          loadedQuestions.results[0].correct_answer
        );
        console.log(choices1);
        this.setState({
          ques1Correct: atob(loadedQuestions.results[0].correct_answer),
        });

        console.log(this.state.ques1Correct);

        var choice1 = atob(choices1[0][0]);

        this.setState({ ques1Choice1: choice1 });

        console.log(this.state.ques1Choice1);

        var choice2 = atob(choices1[0][1]);
        this.setState({ ques1Choice2: choice2 });
        console.log(this.state.ques1Choice2);

        var choice3 = atob(choices1[1]);
        this.setState({ ques1Choice3: choice3 });
        console.log(this.state.ques1Choice3);

        var choice4 = atob(choices1[0][2]);
        this.setState({ ques1Choice4: choice4 });
        console.log(this.state.ques1Choice4);
      });
  }
  render() {
    const { name } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Question</h3>
        <text>{this.state.ques1}</text>
        <h3>Options:</h3>
        <text> A. {this.state.ques1Choice1} </text>
        <text> B. {this.state.ques1Choice2} </text>
        <text> C. {this.state.ques1Choice3} </text>
        <text> D. {this.state.ques1Choice4} </text>
      </div>
    );
  }
}

class Ques3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty2: "",
      ques1: "",
      ques1Choice1: "",
      ques1Choice2: "",
      ques1Choice3: "",
      ques1Choice4: "",
      ques1Correct: "",
    };
  }
  componentDidMount() {
    const { steps } = this.props;
    const difficulty2 = steps;
    this.setState({ difficulty2: difficulty2.value });
    console.log(this.state.difficulty2);
    const name = steps.name.value;
    fetch(
      `https://opentdb.com/api.php?amount=1&encode=base64&type=multiple&category=9&difficulty=${this.state.difficulty2}`
    )
      .then((res) => {
        return res.json();
      })
      .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
          const formattedQuestion = {
            question: loadedQuestion.question,
          };
        });

        this.setState({ ques1: atob(loadedQuestions.results[0].question) });
        console.log(this.state.ques1);
        var random = Math.floor(Math.random() * 4) + 1;
        //QUES1-
        let choices1 = [loadedQuestions.results[0].incorrect_answers];

        choices1.splice(
          random - 1,
          0,
          loadedQuestions.results[0].correct_answer
        );
        console.log(choices1);
        this.setState({
          ques1Correct: atob(loadedQuestions.results[0].correct_answer),
        });

        console.log(this.state.ques1Correct);

        var choice1 = atob(choices1[0][0]);

        this.setState({ ques1Choice1: choice1 });

        console.log(this.state.ques1Choice1);

        var choice2 = atob(choices1[0][1]);
        this.setState({ ques1Choice2: choice2 });
        console.log(this.state.ques1Choice2);

        var choice3 = atob(choices1[0][2]);
        this.setState({ ques1Choice3: choice3 });
        console.log(this.state.ques1Choice3);

        var choice4 = atob(choices1[1]);
        this.setState({ ques1Choice4: choice4 });
        console.log(this.state.ques1Choice4);
      });
  }
  render() {
    const { name } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Question</h3>
        <text>{this.state.ques1}</text>
        <h3>Options:</h3>
        <text> A. {this.state.ques1Choice1} </text>
        <text> B. {this.state.ques1Choice2} </text>
        <text> C. {this.state.ques1Choice3} </text>
        <text> D. {this.state.ques1Choice4} </text>
      </div>
    );
  }
}

var score = 0;

class Finish extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>

        <text>
          The quiz is finished. Hoped you liked it. Thanks. Your Score is{" "}
        </text>
        <text>{score}</text>
      </div>
    );
  }
}

const ExampleDBPedia = () => (
  <ChatBot
    steps={[
      {
        id: "1",
        message: "Hello I am Clyde. I am an quiz bot. What is your name.",
        trigger: "name",
      },
      {
        id: "name",
        user: true,
        trigger: "3",
      },
      {
        id: "3",
        component: <Name />,

        trigger: "difficulty1",
      },
      {
        id: "difficulty1",
        message:
          "Hi {previousValue}, Which difficulty of quiz you would like to have",
        trigger: "difficulty2",
      },
      {
        id: "difficulty2",
        options: [
          { value: "easy", label: "easy", trigger: "ques1" },
          { value: "medium", label: "medium", trigger: "ques1" },
          { value: "hard", label: `hard`, trigger: "ques1" },
        ],
      },
      {
        id: "ques1",
        component: <Ques1 />,
        trigger: "opt1",
      },
      {
        id: "opt1",
        options: [
          {
            value: "Option A",
            label: "Option A",
            trigger: () => {
              score++;
              return "correct1";
            },
          },
          { value: "Option B", label: "Option B", trigger: "wrong1" },
          { value: "Option C", label: `Option C`, trigger: "wrong1" },
          { value: "Option D", label: `Option D`, trigger: "wrong1" },
        ],
      },
      {
        id: "correct1",
        message: "Fabolous! You got it correct",
        trigger: "ques2",
      },
      {
        id: "wrong1",
        message: "Wrong",
        trigger: "ques2",
      },
      {
        id: "ques2",
        component: <Ques2 />,
        trigger: "opt2",
      },
      {
        id: "opt2",
        options: [
          { value: "Option A", label: "Option A", trigger: "wrong2" },
          { value: "Option B", label: "Option B", trigger: "wrong2" },
          {
            value: "Option C",
            label: `Option C`,
            trigger: () => {
              score++;
              return "correct2";
            },
          },
          { value: "Option D", label: `Option D`, trigger: "wrong2" },
        ],
      },
      {
        id: "correct2",
        message: "Fabolous! You got it correct",
        trigger: "ques3",
      },
      {
        id: "wrong2",
        message: "Wrong",
        trigger: "ques3",
      },
      {
        id: "ques3",
        component: <Ques3 />,
        trigger: "opt3",
      },
      {
        id: "opt3",
        options: [
          { value: "Option A", label: "Option A", trigger: "wrong3" },
          { value: "Option B", label: "Option B", trigger: "wrong3" },
          { value: "Option C", label: `Option C`, trigger: "wrong3" },
          {
            value: "Option D",
            label: `Option D`,
            trigger: () => {
              score++;
              return "correct3";
            },
          },
        ],
      },
      {
        id: "correct3",
        message: "Fabolous! You got it correct",
        trigger: "done",
      },
      {
        id: "wrong3",
        message: "Wrong",
        trigger: "done",
      },
      {
        id: "done",
        component: <Finish />,
        end: true,
      },
    ]}
  />
);

export default ExampleDBPedia;
