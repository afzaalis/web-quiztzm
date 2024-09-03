import React from "react";
import { Rule } from "../components/rules";

export const Dashboard = () => {
    return (
        <div className="dashboardContent-container">
            <h1 style={{padding:'20px'}}>Welcome to the Quiztzm!</h1>
            <Rule />


            <p style={{fontSize:'12px' , padding:'20px'}}>Quiztzm is an application offers an engaging and 
                interactive way to test your knowledge on various topics.
                 Users are presented with a series of questions, 
                 each accompanied by a countdown timer. As users input their answers, 
                 they receive immediate feedback, and their score is updated 
                 dynamically. At the end of the quiz, users can view their total 
                 score and enjoy a celebratory fireworks animation if they answer all
                  questions correctly. Designed with responsiveness in mind, the
                   application ensures a smooth experience across both desktop and mobile devices
                .made by @afzaalis</p>
        </div>
    );
}
