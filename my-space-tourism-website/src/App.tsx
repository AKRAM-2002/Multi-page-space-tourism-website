import './App.css'

function App() {
 

  return (
    <>
     <div className="container bg-dark grid">
      <h1>Design Systems</h1>
      <section id="colors">
                <h2><span>01</span> colors</h2>
                
                <div>
                    <div className="box bg-dark text-white" >
                        #0B0D17
                    </div>
                    <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                    <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                </div>
                <div>
                    <div className="box bg-accent text-dark">
                        #0B0D17
                    </div>
                    <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                    <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                </div>
                <div >
                    <div className="box bg-white text-dark" >
                        #0B0D17
                    </div>
                    <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                    <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                </div>
                
            </section>

      
     </div>
    </>
  )
}

export default App
