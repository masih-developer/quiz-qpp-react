import React, { Component } from "react";
import "./Quiz.css";

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    questionTitle: "What is the capital of France?",
                    questionOptions: [
                        { answer: "New York", isCorrect: false },
                        { answer: "London", isCorrect: false },
                        { answer: "Paris", isCorrect: true },
                        { answer: "Dubi", isCorrect: false },
                    ],
                },
                {
                    questionTitle: "What is the currency of the United States?",
                    questionOptions: [
                        { answer: "Rial", isCorrect: false },
                        { answer: "Dollar", isCorrect: true },
                        { answer: "Euro", isCorrect: false },
                        { answer: "Dinar", isCorrect: false },
                    ],
                },
                {
                    questionTitle: "What is the population of the world?",
                    questionOptions: [
                        { answer: "7 Billion", isCorrect: true },
                        { answer: "2 Billion", isCorrect: false },
                        { answer: "3 Billion", isCorrect: false },
                        { answer: "10 Billion", isCorrect: false },
                    ],
                },
            ],
            score: 0,
            currentQuestion: 0,
            finalScores: false,
        };
    }

    clickHandler(isCrr) {
        isCrr &&
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1,
                };
            });

        if (this.state.currentQuestion < this.state.questions.length - 1) {
            this.setState((prevState) => {
                return { currentQuestion: prevState.currentQuestion + 1 };
            });
        } else {
            this.setState({ finalScores: true });
        }
    }

    render() {
        return (
            <div className="quiz">
                {this.state.finalScores ? (
                    <div className="quiz__result-wrapper">
                        <h1 className="quiz__result">
                            You scored {this.state.score} out of {this.state.questions.length}
                        </h1>
                    </div>
                ) : (
                    <>
                        <div className="quiz_left">
                            <h1 className="quiz__question-title">
                                Question {this.state.currentQuestion + 1}/
                                <span>{this.state.questions.length}</span>
                            </h1>
                            <h3 className="quiz__question">
                                {this.state.questions[this.state.currentQuestion].questionTitle}
                            </h3>
                        </div>
                        <div className="quiz_right">
                            <ul className="quiz__list">
                                {this.state.questions[
                                    this.state.currentQuestion
                                ].questionOptions.map((answer) => (
                                    <li
                                        className="quiz__item"
                                        onClick={this.clickHandler.bind(this, answer.isCorrect)}
                                    >
                                        {answer.answer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
