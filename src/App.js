import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import Question from "./pages/Question";
import centuryGothic from "./assets/century_gothic_regular.ttf";
import centuryGothicBold from "./assets/century_gothic_bold.ttf";
import ridingRainbow from "./assets/riding-rainbow.gif";
import sallyInTheBoxGif from "./assets/sally-in-the-box.gif";
import sallyInTheBoxJpg from "./assets/sally-in-the-box.jpg";
import hypnoSally from "./assets/hypno-sally.gif";
import sallyGoose from "./assets/sally-goose.gif";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Century Gothic';
    src: url(${centuryGothic}) format('truetype') ;
    font-weight: regular;
  }
  @font-face {
    font-family: 'Century Gothic';
    src: url(${centuryGothicBold}) format('truetype') ;
    font-weight: bold;
  }

  * html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }  
`;

const Layout = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  console.log(sallyInTheBoxJpg);

  const textForQ1 = [
    "Der Weihnachtsmann schenkt Sally elf Kekse und sagt: ",
    "„Es ist wichtig, dass Du sie nicht alle auf einmal isst. Warte mindestens sieben Minuten, bis Du einen weiteren Keks isst, sonst platzt du.“",
    "Nach wieviel Minuten hat Sally frühestens alle Kekse gegessen?",
  ];

  const textForQ2 = [
    "Es geht immer um den Baum herum und kann doch nicht hinein. Was meinen wir?",
    "Was ist gemeint?",
  ];

  return (
    <>
      <GlobalStyle />
      <Layout>
        <HashRouter basename="/">
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/1">
            <Search
              image={sallyInTheBoxJpg}
              animation={sallyInTheBoxGif}
              targets={[32, 31, 30, 28, 27, 26, 24, 23]}
              linkTarget={2}
            />
          </Route>
          <Route exact path="/2">
            <Question
              correctAnswer={"10"}
              linkTarget={3}
              image={hypnoSally}
              questionIndex={0}
            />
          </Route>
          <Route exact path="/3">
            <Search
              image={ridingRainbow}
              targets={[11, 12, 15, 16]}
              linkTarget={4}
            />
          </Route>
          <Route exact path="/4">
            <Question
              correctAnswer={"rinde"}
              linkTarget={5}
              image={sallyGoose}
              questionIndex={1}
            />
          </Route>
        </HashRouter>
      </Layout>
    </>
  );
}

export default App;
