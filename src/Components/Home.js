// Home.js
import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Coding Quiz Platform</h2>
      <p>This platform provides quizzes on various programming languages and technologies. Choose a category from the navigation menu to get started.</p>

      <div className="language-info">
        <h3>Java</h3>
        <p>
          Java is a widely used, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
        </p>

        <h3>HTML</h3>
        <p>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web pages using markup.
        </p>

        <h3>CSS</h3>
        <p>
          CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML, including colors, layouts, and fonts.
        </p>

        <h3>JavaScript</h3>
        <p>
          JavaScript is a high-level, interpreted programming language that is widely used to make web pages interactive and dynamic.
        </p>

        <h3>Python</h3>
        <p>
          Python is a general-purpose, high-level programming language known for its readability and ease of use. It is widely used in web development, data science, and more.
        </p>

        <h3>React</h3>
        <p>
          React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render UI components.
        </p>

        <h3>SQL</h3>
        <p>
          SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases. It is used to query, update, and manage databases.
        </p>
      </div>
    </div>
  );
}

export default Home;
