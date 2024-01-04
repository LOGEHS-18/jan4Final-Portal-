import React, { useState } from 'react';
import { useEffect } from 'react';
import './Chatbot.css'; 
const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 400 });


  const handleMouseDown = (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
        return;
    }
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const messageProbability =(userMessage, recognisedWords, singleResponse = false, requiredWords = []) => {
    let messageCertainty = 0;
    let hasRequiredWords = true;

    for (const word of userMessage) {
      if (recognisedWords.includes(word)) {
        messageCertainty += 1;
      }
    }

    const percentage = (messageCertainty / recognisedWords.length) * 100;

    for (const word of recognisedWords) {
      if (!userMessage.includes(word)) {
        hasRequiredWords = false;
        break;
      }
    }

    return hasRequiredWords || singleResponse ? Math.floor(percentage) : 0;
  };
  const checkAllMessages = (message) => {
    const highestProbList = {};

    const response = (botResponse, listOfWords, singleResponse = false, requiredWords = []) => {
      highestProbList[botResponse] = messageProbability(message, listOfWords, singleResponse, requiredWords);
    };

    response("Hello!", ["hello", "hi", "sup", "hey", "heyo"], true);
    response("I am doing fine, and you?", ["how", "you", "doing"], true);
    response("I am Bot and I can clarify your doubts", ["name", "about", "are", "who", "you", "something", "tell", "dell"], true);
    response("I can clarify your doubts ", ["can", "you", "work"], true);
    response("Good bye", ["bye"]);
    response("Today is a great day", ["day", "today"]);
    response("Today is a beautiful day", ["about", "today"], true);
    response("Go to Home Page->Click->Feedback Form", ["feedback", "form", "navigate", "go to feedback"], true);
    response("Go to Home Page->Click->Compaint Registration", ["case", "section", "navigate", "go to case"], true);
    response("Navigate to Sign Up", ["sign", "up", "signup", "register"], true);
    response("Navigate to Sign In", ["sign", "in", "signin", "login"], true);

    const bestMatch = Object.keys(highestProbList).reduce((a, b) => highestProbList[a] > highestProbList[b] ? a : b);
    return highestProbList[bestMatch] < 1 ? 'Unknown' : bestMatch;
  };

  const handleInputSubmit = () => {
    const splitMessage = userInput.toLowerCase().split(/\s+|[,;?!.-]\s*/);
    const response = checkAllMessages(splitMessage);
    setBotResponse(response);
    setUserInput(''); // Clear input after sending
  };

  return (
    <div
    className="chatbot-container"
    style={{ left: position.x, top: position.y }}
    onMouseDown={handleMouseDown}
  >
    <h2 className="chatbot-heading">ChatBot</h2>
    <div className="chat-content">
      <div className="chat-messages">
        {botResponse && <div className="bot-message">{`Bot: ${botResponse}`}</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleInputSubmit}>
          <span role="img" aria-label="send">➡️</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Chatbot;
