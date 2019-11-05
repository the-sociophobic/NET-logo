import React, { Component } from 'react'

import ExternalLink from '../ExternalLink'
import { questions, names as namesList } from './data'


const initialState = {
  currentQuestion: 0,
  currentAnswer: undefined,
  answers: [],
  result: undefined,
}

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    console.log("Quiz initialized")
  }

  componentDidMount = () => console.log("Quiz mounted")

  renderQuestion = question => (
    <div className="quiz__question">
      <div className="quiz__question__number">
        {this.state.currentQuestion + 1} / {questions.length}
      </div>
      <h2 className="quiz__h2">
        {question.question}
      </h2>
      <div className="quiz__question__options">
        {question.options.map(option => (
          <div
            key={option.answer}
            className={"quiz__question__options__item " +
              (option.answer === (this.state.currentAnswer && this.state.currentAnswer.answer) && "quiz__question__options__item--selected")
            }
            onClick={() => this.setState({currentAnswer: option})}
          >
            {option.answer}
          </div>
        ))}
      </div>
      <button
        disabled={typeof this.state.currentAnswer === "undefined"}
        className="quiz__button quiz__button--next"
        onClick={() => this.nextQuestion()}
      >
        {this.state.currentQuestion + 1 < questions.length ? "Далее" : "Закончить"}
      </button>
    </div>
  )

  renderFinish = () => (
    <div className="quiz__finish">
      {this.state.result &&
        <div className="quiz__finish__text">
          <h2 className="quiz__h2">
            Поздравляем! Вы {this.state.result.fullName}!
          </h2>
          <video className="quiz__finish__video" loop autoPlay>
            <source src={`https://schedule.tochkadostupa.spb.ru/net-${this.state.result.video}-video`} type="video/mp4" />
            <source src={`https://schedule.tochkadostupa.spb.ru/net-${this.state.result.video}-video`} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <h3 className="quiz__finish__h3">
            ЧТО ДЕЛАТЬ?
          </h3>
          {this.state.result.points.map(point => (
            <div
              key={typeof point === "string" ? point : point.label}
              className="quiz__finish__point"
            >
              ✔️{typeof point === "string" ?
                point
                :
                <>{point.label} <ExternalLink to={point.link.to} newTab>{point.link.label}</ExternalLink></>
              }
            </div>
          ))}
        </div>
      }
      {this.state.result.promocode &&
        <div className="quiz__finish__promocode">
          <h3 className="quiz__h3">{this.state.result.promocode.label}</h3>
          <div
            className="quiz__button quiz__button--copy"
            // onClick={() => }
            title="скопировать код"
          >
            {this.state.result.promocode.code}
          </div>
        </div>
      }
      <ExternalLink
        to={this.state.result.ticketLink || "https://netfest.ru/program/"}
        newTab
      >
        <button
          className="quiz__button quiz__button--buy"
        >
          КУПИТЬ БИЛЕТ
        </button>
      </ExternalLink>

      <button
        className="quiz__button quiz__button--again"
        onClick={() => this.setState({...initialState})}
      >
        Пройти еще раз
      </button>
    </div>
  )

  nextQuestion = () => {
    let { answers, currentAnswer, currentQuestion } = this.state

    currentAnswer.names.forEach(name => answers.push(name))
    this.setState({
      answers: answers,
      currentQuestion: this.state.currentQuestion + 1,
      currentAnswer: undefined,
    })

    if (currentQuestion + 1 === questions.length)
      this.calculateResult()
  }

  calculateResult = () => {
    const { answers } = this.state
    let names = namesList
      .map(name => ({[name.name]: 0}))
      .reduce((a, b) => ({...a, ...b}))

    answers.forEach(name => names[name]++)
    
    const resultName = Object.keys(names)
      .map(key => ({
        name: key,
        score: names[key]
      }))
      .sort((a, b) => b.score - a.score)
      [0].name

    this.setState({
      result: namesList[namesList.map(name => name.name).indexOf(resultName)]
    })
  }

  render = () => {
    return (
      <div className="quiz-container">
        <div className="quiz">
          {this.state.currentQuestion < questions.length ?
            this.renderQuestion(questions[this.state.currentQuestion])
            :
            this.renderFinish()
          }
        </div>
      </div>
    )
  }
}