const express = require('express');
const app = express();
const PORT = 3000;
const p4 = require('./p4-module');

app.get('/cit/question', (req, res) => {
    const questions = p4.getQuestions();
    res.status(200).json({
      error: "",
      statusCode: 200,
      questions: questions
    });
  });
  
  app.get('/cit/answer', (req, res) => {
    const answers = p4.getAnswers();
    res.status(200).json({
      error: "",
      statusCode: 200,
      answers: answers
    });
  });
  
  app.get('/cit/questionanswer', (req, res) => {
    const questions_answers = p4.getQuestionsAnswers();
    res.status(200).json({
      error: "",
      statusCode: 200,
      questions_answers: questions_answers
    });
  });
  
  app.get('/cit/question/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = p4.getQuestion(number);
    const status = result.error ? 404 : 200;
    res.status(status).json({
      error: result.error,
      statusCode: status,
      question: result.question,
      number: result.number
    });
  });
  
  app.get('/cit/answer/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = p4.getAnswer(number);
    const status = result.error ? 404 : 200;
    res.status(status).json({
      error: result.error,
      statusCode: status,
      answer: result.answer,
      number: result.number
    });
  });
  
  app.get('/cit/questionanswer/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = p4.getQuestionAnswer(number);
    const status = result.error ? 404 : 200;
    res.status(status).json({
      error: result.error,
      statusCode: status,
      question: result.question,
      answer: result.answer,
      number: result.number
    });
  });