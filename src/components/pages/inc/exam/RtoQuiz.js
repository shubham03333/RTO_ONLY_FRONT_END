import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import imgcart from "../../../../assets/exam/img100.png";
import imgBluecircle from "../../../../assets/exam/img115.png";
import imgprohibate from "../../../../assets/exam/img74.png";
import { toast } from "react-toastify";
import LLService from "../../../../Services/LLService";

import "./RtoQuiz.css";
export default function RtoQuiz() {
  const { id, name } = sessionStorage;
  const [ll, setLL] = useState([]);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 1) {
        sendResult();
        navigate("/userHome");
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const navigate = useNavigate();

  const [ll_id, setLl_id] = useState("");

  // console.log("userid " + id);

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/userHome");
    // }, 50000);

    LLService.getLLByUserIdforcert(id)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.user);

        setLL(response.data);
        if (response.data.quizMarks > 5) {
          toast.warning(
            "Your are not allowed to give test again you have passesd the written test!"
          );
          navigate("/userHome");
        }
        setLl_id(response.data.id);
        // console.log(ll);
        // console.log(ll.id);
        // console.log(ll.)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const questions = [
    {
      questionText: "What does this sign indicate?",
      answerOptions: [
        { answerText: "Handcart prohibited", isCorrect: false },
        { answerText: "Bullock cart prohibited", isCorrect: false },
        { answerText: "Tongas prohibited", isCorrect: true },
        { answerText: "Animal prohibited", isCorrect: false },
      ],
    },
    {
      questionText: "The meaning of road signs in blue circle is?",
      answerOptions: [
        { answerText: "Stop", isCorrect: false },
        { answerText: "Compulsion to do", isCorrect: true },
        { answerText: "Prohibition to do", isCorrect: false },
        { answerText: "Informative", isCorrect: false },
      ],
    },
    {
      questionText:
        "Provision regarding leaving vehicle in dangerous position is in section?",
      answerOptions: [
        { answerText: "123 of M.V. Act", isCorrect: true },
        { answerText: "122 of M.V. Act", isCorrect: false },
        { answerText: "125 of M.V. Act", isCorrect: false },
        { answerText: "not confirm", isCorrect: false },
      ],
    },
    {
      questionText: "What does this sign indicate?",
      answerOptions: [
        { answerText: "No entry", isCorrect: false },
        { answerText: "Danger ahead", isCorrect: false },
        { answerText: "stop", isCorrect: false },
        { answerText: "Both ways prohibited", isCorrect: true },
      ],
    },
    {
      questionText: "What does an odometer show?",
      answerOptions: [
        { answerText: "Speed of the vehicle", isCorrect: false },
        {
          answerText: "Total distance covered by the vehicle",
          isCorrect: false,
        },
        { answerText: "amount of fuel remaining", isCorrect: false },
        { answerText: "Above Both A and B", isCorrect: true },
      ],
    },
    {
      questionText:
        "You are in a tunnel. Your vehicle is on fire & you cannot drive it. What should you have to do?",
      answerOptions: [
        {
          answerText:
            "Try & put out the fire & switch on hazard warning lights",
          isCorrect: false,
        },
        {
          answerText: "do nothing",
          isCorrect: false,
        },
        {
          answerText:
            "Stay in the vehicle & wait for other people to phone for help",
          isCorrect: false,
        },
        {
          answerText: "Switch off all your lights & leave the engine running",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "You can park a vehicle in such a way that it obstructs other vehicle if, only?",
      answerOptions: [
        {
          answerText:
            "Someone is there in the car to move it whenever required",
          isCorrect: false,
        },
        { answerText: "Not longer than 10 minutes", isCorrect: false },
        { answerText: "To pick up & drop passengers", isCorrect: false },
        { answerText: "no comment", isCorrect: true },
      ],
    },
    {
      questionText: "At unguarded level crossing?",
      answerOptions: [
        { answerText: "Cross at brisk speed", isCorrect: false },
        {
          answerText:
            "Stop, cross without changing a gear only if train is not crossing",
          isCorrect: false,
        },
        {
          answerText: "Stop, cross only if train is not crossing",
          isCorrect: false,
        },
        { answerText: "Both ways prohibited", isCorrect: true },
      ],
    },
    {
      questionText:
        "You arrive at an accident spot. The motor cyclist is unconscious. Your first priority is the casualties?",
      answerOptions: [
        { answerText: "Bleeding", isCorrect: false },
        { answerText: "choking", isCorrect: false },
        { answerText: "Breathing", isCorrect: true },
        { answerText: "Broken bone", isCorrect: false },
      ],
    },
    {
      questionText:
        "The pedestrians shall not cross the road at sharp bends or very near to a stopped vehicle. Why ?",
      answerOptions: [
        { answerText: "Inconvenience to other vehicles", isCorrect: false },
        { answerText: "Inconvenience to other road users", isCorrect: false },
        {
          answerText: "to avoid crosing vehicle",
          isCorrect: false,
        },
        {
          answerText:
            "Drivers of other vehicles coming at a distance may not see persons crossing the road",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);

  // console.log("score " + score);

  const sendResult = (e) => {
    // e.preventDefault();
    let ll = {
      quizMarks: score,
    };

    console.log("sent marks  " + score);

    LLService.updateLLresult(ll, ll_id).then((res) => {
      navigate("/userHome");
    });
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-6">
          <div className="col-md-4 float-end ">
            <h3>Timer</h3>
            <h1
              style={{
                color: "red",
              }}
            >
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
              {/* <button className="restart" onClick={restart}>
              Restart
            </button>
            <button className="stop" onClick={stop}>
              Stop
            </button> */}
            </h1>
            <h5>Max Exam time 1 mins</h5>
          </div>
        </div>
      </div>

      <div
        className="quizfullbg justify-content-center"
        style={{ marginTop: "-230px" }}
      >
        <div className="quizapp">
          {showScore ? (
            <div className="score-section">
              {/* {sendResult} */}
              <h2
                style={{
                  color: "orange",
                  marginBottom: "40px",
                  marginRight: "20px",
                }}
              >
                You scored {score} out of {questions.length}
              </h2>
              {/* {result} */}
              {score > 5 ? (
                <div>
                  <h4 style={{ color: "green", marginTop: "20px" }}>
                    Congratulations you have passed the written exam
                  </h4>
                  <button className="btn btn-danger mt-4" onClick={sendResult}>
                    Finish test
                  </button>
                </div>
              ) : (
                <div>
                  <h4 style={{ color: "red", marginTop: "20px" }}>
                    Sorry you have failed the written try in next attempt
                  </h4>
                  <button className="btn btn-danger mt-4" onClick={sendResult}>
                    Finish test
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
                {currentQuestion == 0 && (
                  <img
                    src={imgcart}
                    alt="services"
                    //   onClick={() => navigate("/login")}
                  />
                )}
                {currentQuestion == 1 && (
                  <img
                    src={imgBluecircle}
                    alt="services"
                    //   onClick={() => navigate("/login")}
                  />
                )}
                {/* {currentQuestion == 2 && (
                <img
                  src={imgcart}
                  alt="services"
                  //   onClick={() => navigate("/login")}
                />
              )} */}

                {currentQuestion == 3 && (
                  <img
                    src={imgprohibate}
                    alt="services"
                    //   onClick={() => navigate("/login")}
                  />
                )}
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="quizButtun"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
