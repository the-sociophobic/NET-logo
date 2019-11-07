import React, { Component } from 'react'

import ExternalLink from '../ExternalLink'
import { questions, names as namesList } from './data'
import copyToClipboard from '../../utils/copyToClipboard'


const initialState = {
  started: undefined,
  finished: undefined,
  currentQuestion: 0,
  currentAnswer: undefined,
  answers: [],
  result: undefined,
  height: 0,
}

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    console.log("Quiz initialized")
    // console.log(window.location)
  }

  componentDidMount = () => {
    namesList.forEach(name => {
      const nameElem = document.getElementById(name.nameEng)
      const nameLocation = window.location.href.includes(name.nameEng)
      //IF there is div on the page with some name => it's /i-am-name page!
      if (nameElem || nameLocation)
        this.setState({result: name})
    })
    // setTimeout(() => console.log(this.state.result), 100)
    
    const url = new URL(window.location.href)
    const started = url.searchParams.get("started")
    if (started)
      this.setState({started: true})
    else
      this.setState({started: false})
    const finished = url.searchParams.get("finished")
    if (finished) {
      this.setState({finished: true})
      setTimeout(() => this.updateHeight(), 200)
    }
    else
      this.setState({finished: false})

    console.log("Quiz mounted")
  }

  updateHeight = () => {
    console.log("height updated")
    const quizRoot = document.getElementById("quiz")
    const quizElem = document.getElementsByClassName("quiz")[0]
    if (quizRoot && quizElem)
      quizRoot.style.height = `${quizElem.offsetHeight + 300}px`
  }

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
      {this.state.currentQuestion + 1 < questions.length ?
        <button
          disabled={typeof this.state.currentAnswer === "undefined"}
          className="quiz__button quiz__button--next"
          onClick={() => this.nextQuestion()}
        >
          Далее
        </button>
        :
        <ExternalLink to={`https://netfest.ru/i-am-${this.calculateResult().nameEng}/?finished=true`}>
          <button
            disabled={typeof this.state.currentAnswer === "undefined"}
            className="quiz__button quiz__button--next"
          >
            Закончить
          </button>
        </ExternalLink>
      }
    </div>
  )

  renderStart = () => (
    <div className="quiz__start">
      <h2 className="quiz__h2 text-center">
        Узнай кто ты из режиссеров фестиваля NET 2019
      </h2>
      <ExternalLink to="https://netfest.ru/who-are-you/?started=true">
        <button className="quiz__button quiz__button--main">
          Начать тест
        </button>
      </ExternalLink>
    </div>
  )

  renderFinish = () => (
    <div className="quiz__finish">
      {this.state.result &&
        <div className="quiz__finish__text">
          <h2 className="quiz__h2">
            Поздравляем! Вы {this.state.result.fullName}!
          </h2>
          <img
            className="quiz__finish__video"
            src={`https://schedule.tochkadostupa.spb.ru/net-${this.state.result.video}-video`}
          />
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
                <>{point.label} <ExternalLink to={point.link.to} newTab>{point.link.label}</ExternalLink>{point.after}</>
              }
            </div>
          ))}
        </div>
      }
      <div className="quiz__finish__share-row">
        {/* <h1 dangerouslySetInnerHTML={{ __html: this.state.result.vk()}} /> */}
        {/* {this.state.result.fb} */}
        <ExternalLink
          to={this.state.result.vk2}
          newTab
          className="quiz__button quiz__button--vk"
        >
          Поделиться
        </ExternalLink>
        <ExternalLink
          to={"https://facebook.com" + this.state.result.fb2}
          newTab
          className="quiz__button quiz__button--fb"
        >
          Поделиться
        </ExternalLink>
      </div>
      {this.state.result.promocode &&
        <div className="quiz__finish__promocode">
          <h3 className="quiz__h3">{this.state.result.promocode.label}</h3>
          <div
            className="quiz__button quiz__button--copy"
            onClick={() => copyToClipboard(this.state.result.promocode.code)}
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

      <ExternalLink to="https://netfest.ru/who-are-you/?started=true">
        <button
          className="quiz__button quiz__button--again"
          // onClick={() => this.setState({...initialState})}
        >
          Пройти еще раз
        </button>
      </ExternalLink>
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
  }

  calculateResult = () => {
    let { answers, currentAnswer } = this.state

    if (typeof currentAnswer !== "undefined")
      currentAnswer.names.forEach(name => answers.push(name))

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

    return namesList[namesList.map(name => name.name).indexOf(resultName)]
  }

  render = () => {
    const { started, finished, result } = this.state

    //user came from shared link i-am-name => render START TEST
    if (typeof result !== "undefined" && finished === false)
      return <div className="quiz-container"><div className="quiz">{this.renderStart()}</div></div>

    //user finished test => render U ARE NAME
    if (typeof result !== "undefined" && finished === true)
      return <div className="quiz-container"><div className="quiz">{this.renderFinish()}</div></div>

    //component didn't mount and agnostic of situation => render nothing
    if (typeof result === "undefined" && typeof finished === "undefined")
      return ""
    
    //user goes throught test => render test
    return (
      <div className="quiz-container">
        <div className="quiz">
          {this.state.currentQuestion < questions.length ?
            this.renderQuestion(questions[this.state.currentQuestion])
            :
            this.renderFinish()}
        </div>
      </div>
    )
  }
}