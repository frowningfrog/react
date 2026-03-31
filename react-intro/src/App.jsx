import './App.css'

function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '100%'}}>
        <div style={{display: "flex", gap: "50px", alignItems: 'center'}}>
          <h1>funny site</h1>
          <p>Can't believe this is Home</p>
          <p>Stuff</p>
          <p>More stuff</p>
        </div>
        <div style={{}}>
          <p style={{}}>Here is the most important content you will ever read in your life</p>
          <p>Here is something more</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', border: '3px solid green', height: '99vh'}}>
        <p>greetings</p>
        <p>programs</p>
      </div>
    </div>
    
  )
}

export default App
