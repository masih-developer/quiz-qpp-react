import React, { Component } from "react";
import Quiz from "./components/Quiz/Quiz";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Quiz />
            </div>
        );
    }
}
