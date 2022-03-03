import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Cual es la fomula de la cotangente?",
      answers: [
        {
          text: "Cateto Adyacente/Cateto Opuesto",
          correct: true,
        },
        {
          text: "Hipotenusa/Cateto Adyacente",
          correct: false,
        },
        {
          text: "Hipotenusa/Cateto Opuesto",
          correct: false,
        },
        {
          text: "Cateto Opuesto/Cateto Adyacente",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Como podemos pasar de segundos a grados?",
      answers: [
        {
          text: "Multiplicamos por 3600",
          correct: true,
        },
        {
          text: "Se divide entre 60",
          correct: false,
        },
        {
          text: "Dividimos entre 3600",
          correct: false,
        },
        {
          text: "Multiplicamos el Cateto Opuesto por 3 y dividimos entre el angulo",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Cual es la formula de la cosecante?",
      answers: [
        {
          text: "Hipotenusa/Cateto Adyacente",
          correct: false,
        },
        {
          text: "Cateto Adyacente/Cateto Opuesto",
          correct: false,
        },
        {
          text: "Cateto Adyacente/Hipotenusa",
          correct: true,
        },
        {
          text: "Hipotenusa/Cateto Adyacente",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "El coseno de 90 es: ",
      answers: [
        {
          text: "La suma de los angulos",
          correct: false,
        },
        {
          text: "La suma de los catetos",
          correct: false,
        },
        {
          text: "1/2",
          correct: false,
        },
        {
          text: "0",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Cuanto mide la suma de todos los angulos de un triangulo?",
      answers: [
        {
          text: "90 grados",
          correct: false,
        },
        {
          text: "360 grados",
          correct: false,
        },
        {
          text: "180 grados",
          correct: true,
        },
        {
          text: "No se puede sumar",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "El cateto adyacente sobre el cateto opuesto es: ",
      answers: [
        {
          text: "Tangente",
          correct: false,
        },
        {
          text: "Cotangente",
          correct: true,
        },
        {
          text: "Seno",
          correct: false,
        },
        {
          text: "Coseno",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Cual es el teorema de pitagoras?",
      answers: [
        {
          text: "a2 = b2 + c2",
          correct: true,
        },
        {
          text: "No existe tal teorema",
          correct: false,
        },
        {
          text: "a2 = c2 - b2",
          correct: false,
        },
        {
          text: "a2 = b2 - c2",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "La trigonometria es: ",
      answers: [
        {
          text: "Matematica de triangulos",
          correct: true,
        },
        {
          text: "Geometria de triangulos",
          correct: true,
        },
        {
          text: "Ciencia de triangulos",
          correct: true,
        },
        {
          text: "El estudio de las razones trigonometricas",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Cual es la formula de la tangente?",
      answers: [
        {
          text: "cateto opuesto/hipotenusa",
          correct: false,
        },
        {
          text: "cateto adyacente/hipotenusa",
          correct: true,
        },
        {
          text: "hipotenusa/cateto adyacente",
          correct: false,
        },
        {
          text: "hipotenusa/cateto opuesto",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Los angulos en un triangulo agudo suman",
      answers: [
        {
          text: "360",
          correct: false,
        },
        {
          text: "45",
          correct: false,
        },
        {
          text: "90",
          correct: true,
        },
        {
          text: "180",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "El seno de un angulo de 0 grados es",
      answers: [
        {
          text: "0",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1/2",
          correct: false,
        },
        {
          text: "√3/3",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Cual es la formula de la secante?",
      answers: [
        {
          text: "Cateto Opuesto/Hipotenusa",
          correct: false,
        },
        {
          text: "Hipotenusa/Cateto Adyacente",
          correct: true,
        },
        {
          text: "Cateto Adyacente/Cateto Opuesto",
          correct: false,
        },
        {
          text: "Cateto Adyacente/Hipotenusa",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Cual es la formula de el seno?",
      answers: [
        {
          text: "cateto adyacente/hipotenusa",
          correct: false,
        },
        {
          text: "hipotenusa/cateto opuesto",
          correct: false,
        },
        {
          text: "hipotenusa/cateto adyacente",
          correct: false,
        },
        {
          text: "cateto opuesto/hipotenusa",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Cuales de las siguientes no es una aplicacion de la trigonometria",
      answers: [
        {
          text: "Calcular la distancia entre dos puntos cuando uno de ellos es inaccesible",
          correct: false,
        },
        {
          text: "Calculo de la altura de un punto de pie inaccesible",
          correct: false,
        },
        {
          text: "Ninguno de los anteriores",
          correct: true,
        },
        {
          text: "Cálculo de la distancia entre dos puntos inaccesibles",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Quien es conocido como el padre de la trigonometria",
      answers: [
        {
          text: "Pitagoras",
          correct: false,
        },
        {
          text: "Hiparco",
          correct: true,
        },
        {
          text: "Euclides",
          correct: false,
        },
        {
          text: "Einstein",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
