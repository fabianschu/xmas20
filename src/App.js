import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import WelcomeBye from "./pages/WelcomeBye";
import Search from "./pages/Search";
import Question from "./pages/Question";
import centuryGothic from "./assets/century_gothic_regular.ttf";
import centuryGothicBold from "./assets/century_gothic_bold.ttf";
import ridingRainbow from "./assets/riding-rainbow.gif";
import sallyInTheBoxGif from "./assets/sally-in-the-box.gif";
import sallyInTheBoxJpg from "./assets/sally-in-the-box.jpg";
import hypnoSally from "./assets/hypno-sally.gif";
import sallyGoose from "./assets/sally-goose.gif";
import sallyTree from "./assets/sally-tree.gif";
import sallySuitcaseGif from "./assets/sally-suitcase.gif";
import sallySuitcaseJpg from "./assets/sally-suitcase.jpg";
import okCiao from "./assets/okciao.gif";
import welcome from "./assets/welcome.gif";

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
    height: 100vh;
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
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HashRouter basename="/">
          <Route exact path="/">
            <Redirect to="/coocoo" />
          </Route>
          <Route exact path="/coocoo">
            <WelcomeBye linkTarget={"presentinho"} image={welcome} />
          </Route>
          <Route exact path="/presentinho">
            <Search
              image={sallyInTheBoxJpg}
              animation={sallyInTheBoxGif}
              targets={[32, 31, 30, 28, 27, 26, 24, 23]}
              linkTarget={"sigmund"}
              instruction={"Es rappelt in der Kiste..."}
            />
          </Route>
          <Route exact path="/sigmund">
            <Question
              correctAnswer={"70"}
              linkTarget={"rainbow"}
              image={hypnoSally}
              questionIndex={0}
            />
          </Route>
          <Route exact path="/rainbow">
            <Search
              image={ridingRainbow}
              targets={[11, 12, 15, 16]}
              linkTarget={"palmtree"}
              instruction={"Es geht ein Dachshund herum..."}
            />
          </Route>
          <Route exact path="/palmtree">
            <Question
              correctAnswer={"rinde"}
              linkTarget={"cookies"}
              image={sallyTree}
              questionIndex={1}
            />
          </Route>
          <Route exact path="/cookies">
            <Search
              image={sallySuitcaseJpg}
              animation={sallySuitcaseGif}
              targets={[18, 19, 22, 23]}
              linkTarget={"jeez"}
              instruction={
                "Backe, backe, Kuchen.. Welche Zutate brauchen für unsere Plätzchen?"
              }
            />
          </Route>
          <Route exact path="/jeez">
            <Question
              correctAnswer={"3"}
              linkTarget={"okciao"}
              image={sallyGoose}
              questionIndex={2}
            />
          </Route>
          <Route exact path="/okciao">
            <WelcomeBye image={okCiao} />
          </Route>
        </HashRouter>
      </Layout>
    </>
  );
}

export default App;
