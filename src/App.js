import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

const data = [
  { desc: "An electronic book, also known as an e-book or eBook, is a book publication made available" },
  { desc: "some e-books exist without a printed equivalent. E-books can be read on dedicated e-reader" },
  { desc: "but also on any computer device that features a controllable viewing screen, including" },
  { desc: "there was a trend of print and e-book sales moving to the Internet" },
  { desc: "The main reasons for people buying e-books are possibly lower prices, increased comfort" },
  { desc: "This is increasing, because by 2014 50% of American adults had an e-reader or a tablet" },
  { desc: "A simple reading machine which I can carry or move around, attach to any old electric light plug" },
]
const App = () => {
  let [start, setStart] = useState(0);
  const [list, setList] = useState([]);
  const [newlist, updateNewlist] = useState([]);

  const ButtonClick = () => {
    if (start === data.length) {
      start = 0
    }
    list.push(data[start])
    start++
    setStart(start)
    setList(list)
  }

  // OnChange method for checkbox in Todo
  const OnChange = (obj, i) => {
    const abc = list.splice(i, 1)
    setList([...list])
    newlist.push(abc[0])
    updateNewlist(newlist)
  }

  // OnDelete method for checkbox in Done
  const OnDelete = (obj, i) => {
    const abc = newlist.splice(i, 1)
    updateNewlist([...newlist])
    list.push(abc[0])
    setList(list)
  }

  const Button = () => (
    <div onClick={ButtonClick}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
      </svg>
    </div>
  )

  return (
    <Container>
      <Row className="m-4">
        To Do
    </Row>
      <Row >
        {list.map((obj, index) => (
          <Col key={index} md={3}>
            <Card style={{ height: '12rem' }} className="mb-4" >
              <Card.Body>
                <Card.Text>
                  {obj.desc}
                </Card.Text>
              </Card.Body>
              <label>
                <input type="checkbox" onChange={() => OnChange(obj, index)} />
                <span className="checkmark" style={{ backgroundColor: 'white' }}></span>
              </label>
            </Card>
          </Col>
        )
        )}
      </Row>
      <Row className="m-4 button">
        <Button />
      </Row>
      <Row className="m-4">
        Done
    </Row>
      <Row >
        {newlist.map((obj, index) => (
          <Col key={index} md={3}>
            <Card style={{ height: '12rem' }} className="mb-4" >
              <Card.Body>
                <Card.Text>
                  {obj.desc}
                </Card.Text>
              </Card.Body>
              <label>
                <input type="checkbox" onChange={() => OnDelete(obj, index)} checked />
                <span className="checkmark"></span>
              </label>
            </Card>
          </Col>
        )
        )}
      </Row>
    </Container>
  )
};

export default App;
