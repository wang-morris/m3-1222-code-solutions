import React from 'react';

const topics = [
  {
    topic: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    topic: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets(CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript'
  },
  {
    topic: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly brace object orientation, and first class functions.'
  }
];

const topicList = topics.map(subjects =>
  <div key={subjects.topic}>{subjects.topic}</div>
);

const descriptionList = topics.map(paragraphs =>
  <div key={paragraphs.topic}>{paragraphs.description}</div>
);

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: 'desc hidden',
      css: 'desc hidden',
      js: 'desc hidden'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target;
    if (target.innerText === 'Hypertext Markup Language') {
      if (this.state.html === 'desc visible') {
        this.setState({ html: 'desc hidden' });
      } else {
        this.setState({
          html: 'desc visible',
          css: 'desc hidden',
          js: 'desc hidden'
        });
      }
    } else if (target.innerText === 'Cascading Style Sheets') {
      if (this.state.css === 'desc visible') {
        this.setState({ css: 'desc hidden' });
      } else {
        this.setState({
          html: 'desc hidden',
          css: 'desc visible',
          js: 'desc hidden'
        });
      }
    } else if (target.innerText === 'JavaScript') {
      if (this.state.js === 'desc visible') {
        this.setState({ js: 'desc hidden' });
      } else {
        this.setState({
          html: 'desc hidden',
          css: 'desc hidden',
          js: 'desc visible'
        });
      }
    }
  }

  render() {
    return (
      <div className='accordion-container'>
        <div className='topics html' onClick={this.handleClick}>{topicList[0]}</div>
        <div className={this.state.html}>{descriptionList[0]}</div>
        <div className='topics css' onClick={this.handleClick}>{topicList[1]}</div>
        <div className={this.state.css}>{descriptionList[1]}</div>
        <div className='topics js' onClick={this.handleClick}>{topicList[2]}</div>
        <div className={this.state.js}>{descriptionList[2]}</div>
      </div>
    );
  }
}

export default Accordion;
