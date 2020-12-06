import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import Question from "./pages/Question";
import centuryGothic from "./assets/century_gothic_regular.ttf";
import centuryGothicBold from "./assets/century_gothic_bold.ttf";
import ridingRainbow from "./assets/riding-rainbow.gif";

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
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/1">
              <Search image={ridingRainbow} targets={[15, 16]} linkTarget={2} />
            </Route>
            <Route exact path="/2">
              <Question correctAnswer={"42"} linkTarget={3} />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
