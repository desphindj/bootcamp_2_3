import Head from "./Header"
import Content from "./Content";
import Footer from "./Footer";
import './Sty.css'; 
import Body from "./Body";
import Student from "./Student";
import Student6 from "./Student6";
function App() {
  
  return (
    <div>
    <div className="App">
      <Head/>
      <Content/>
      <Footer/>
     </div>
     <div>
      <Body/>
      <Student/>
      <Student6/>
     </div>
    </div>

    
  );
}

export default App;
