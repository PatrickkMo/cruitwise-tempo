
import './App.css';

function App() {

  const handleClick = () => {
    window.open('mailto:patrickmo@cruitwise.com');
  };

  return (
    <div className="App">
      <h1 className="Logo">cruit<span>wise</span></h1>
      <h2 className="Sublogo">your <span className="highlighted">one stop</span><span> </span> <span className="highlighted">onboarding solution</span> is coming soon</h2>
      <button className="moreinfo" onClick={handleClick}>contact us!</button>
    </div>
  );
}

export default App;

