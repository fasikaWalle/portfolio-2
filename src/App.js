import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

import zingNew from "../src/assets/images/zing2.0.png";
import zing from "../src/assets/images/zing.png";
import simpleJack from "../src/assets/images/simple_jack.png";
import shop from "../src/assets/images/my-shop.png";

const portfolioData = [
  {
    id: "0",
    title: "Simple Jack",
    role: "Ui developer",
    description:
      "Simple Jack is a game in which Joker has invaded the Marvel Universe and captured heroes and villains alike. Gambit wasthe sole survivor. You will play as Gambit to defeat Joker in rounds of Black Jack.",

    src: simpleJack,
    tool: "Javascript",
    site: "https://jamesluu96.github.io/simple-jack/",
  },
  {
    id: "1",
    title: "Zing",
    role: "full-stack developer",
    description:
      "A chat application  which is powered by Socket.IO. It is a web application that allows multiple users to create their own room and have a group chat to communicate and share ideas.",

    src: zing,
    tool: "Node",
    site: "https://zing-chat-1.herokuapp.com/login",
  },
  {
    id: "2",
    title: "Zing Chat 2.0",
    role: "full-stack developer",
    description:
      "This chat application have features which are added from the former version which you can create your group based on your preference , you can send a friend request and when you become friends you can private chat with that person.",

    src: zingNew,

    tool: "React",
    site: "https://zing-chat-2.herokuapp.com/",
  },

  {
    id: "3",
    title: "My shop",
    role: "full-stack developer",
    description:
      "A React shoping website which allows someone to buy items from the store",

    src: shop,
    tool: "React",
    site: "https://myshopify12.herokuapp.com/",
  },
];
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route
            path="/portfolio"
            render={(props) => (
              <Portfolio {...props} portfolioData={portfolioData} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
