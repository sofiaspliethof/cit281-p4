const getdata = require('./p4-data.js');

function getQuestions() {
    return data.map(item => item.question);
  }
  
  // Function to get all answers
  function getAnswers() {
    return data.map(item => item.answer);
  }
  
  // Function to get a deep copy of all question-answer objects
  function getQuestionsAnswers() {
    return data.map(item => ({ ...item }));
  }
  
  // Function to get a single question by number
  function getQuestion(number = "") {
    const index = Number(number) - 1;
    if (!Number.isInteger(index + 1) || index < 0 || index >= data.length) {
      return {
        question: "",
        number: Number(number),
        error: `Question number must be between 1 and ${data.length}`
      };
    }
    return {
      question: data[index].question,
      number: index + 1,
      error: ""
    };
  }
  
  // Function to get a single answer by number
  function getAnswer(number = "") {
    const index = Number(number) - 1;
    if (!Number.isInteger(index + 1) || index < 0 || index >= data.length) {
      return {
        answer: "",
        number: Number(number),
        error: `Answer number must be between 1 and ${data.length}`
      };
    }
    return {
      answer: data[index].answer,
      number: index + 1,
      error: ""
    };
  }
  
  // Function to get a question and its answer by number
  function getQuestionAnswer(number = "") {
    const index = Number(number) - 1;
    if (!Number.isInteger(index + 1) || index < 0 || index >= data.length) {
      return {
        question: "",
        answer: "",
        number: Number(number),
        error: `Question/Answer number must be between 1 and ${data.length}`
      };
    }
    return {
      question: data[index].question,
      answer: data[index].answer,
      number: index + 1,
      error: ""
    };
  }
  
  // Export all functions
  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  };

 
/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function

  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

