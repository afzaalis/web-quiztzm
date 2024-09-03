import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import '../styles/kuis.css';

import fireworksAnimation from '../animations/fireworks.json';

export const QuizForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10); 
    const [answer, setAnswer] = useState(''); 
    const [score, setScore] = useState(0); 
    const [quizEnded, setQuizEnded] = useState(false); 

    const navigate = useNavigate();

    const keluarQuiz = () => {
        navigate('/dashboard');
    };

    const questions = [
        "Apa ibukota Indonesia?",
        "Siapa GOAT sepak bola dunia?",
        "Berapa hasil dari 9 + 10?",
        "Apa hewan tercepat di dunia?",
        "Siapa presiden pertama Indonesia?"
    ];

    const correctAnswers = [
        "Jakarta",
        "Ronaldo",
        "19",
        "Cheetah",
        "Soekarno"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0 && !quizEnded) {
                setTimeLeft(timeLeft - 1);
            } else if (timeLeft === 0) {
                handleNextQuestion(); 
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, quizEnded]);

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            if (answer.trim().toLowerCase() === correctAnswers[currentQuestion].toLowerCase()) {
                setScore(score + 1); 
            }
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10); 
            setAnswer(''); 
        } else {
            if (answer.trim().toLowerCase() === correctAnswers[currentQuestion].toLowerCase()) {
                setScore(score + 1);
            }
            setQuizEnded(true);
        }
    };

    if (quizEnded) {
        return (
            <div className="quiz-container">
                <h2>Hasil Kuis</h2>
                <p>Skor Anda: {score} dari {questions.length}</p>
                <div className="animation-container">
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true, 
                            animationData: fireworksAnimation 
                        }}
                        height={400}
                        width={400}
                    />
                </div>
                <button onClick={keluarQuiz}>Keluar</button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-title">
                <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Kuis</p>
                <div className="countdown" style={{ marginLeft: '50%' }}>
                    <p id="timer" style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '5px',
                        borderRadius: '7px'
                    }}>{`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</p>
                </div>
            </div>
            <hr />
            <div className="question-container" style={{ textAlign: 'center' }}>
                <p>{questions[currentQuestion]}</p>
            </div>
            <div className="answer-container">
                <input
                    type="text"
                    placeholder="Jawaban Anda"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button onClick={handleNextQuestion}>Next</button>
            </div>
        </div>
    );
};
