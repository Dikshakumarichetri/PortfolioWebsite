import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner-img.png";
import { useEffect, useState } from "react";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); // Keeps track of the current index in the toRotate array.

  const [isDeleting, setIsDeleting] = useState(false); //indicates whether the text is currently being deleted
  const toRotate = [
    "Web Developer",
    " FrontEnd Developer",
    "Wordpress Developer",
  ];
  const [text, setText] = useState(""); //The current text being displayed (one word).
  const period = 2000; // Transition time between each word
  const [delta, setDelta] = useState(300 - Math.random() * 100); //The speed at which one letter is added after the first one is typed.

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); //It sets up an interval (ticker) that calls the tick function repeatedly at the specified delta interval.
    return () => clearInterval(ticker); //The interval is cleared when the component unmounts or when text changes.
  }, [text]);
  //   i: Calculates the current index in the toRotate array based on loopNum.
  //   fullText: Retrieves the full text for the current index.
  //   updatedText: Determines the updated text based on whether it's being deleted or added.
  //   setText(updatedText): Updates the text state with the new text.
  //   The subsequent if statements handle the logic for transitioning between words, speeding up/decelerating typing, and updating the state accordingly.
  //   In summary, this code creates a typewriter effect that cycles through the words in the toRotate array, typing each word and then deleting it after a certain period. The typing speed and transition periods are dynamically adjusted for a more natural typing effect.

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              Welcome to my Porfolio
              </span>

              <h1>
                {`Hi I'm Diksha Chhetri `}
                <span className="wrap">{text}</span>
              </h1>
              <TrackVisibility >
              {({isVisible})=>
              <p className={isVisible ? "animate__animated animate__zoomIn animate_infinite":""}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>}
              </TrackVisibility>
              <button
                onClick={() => {
                  console.log("connect");
                }}
              >
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
