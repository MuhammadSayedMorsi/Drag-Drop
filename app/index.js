import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import Popular from './components/Popular'

import Board from './components/Board'
import Card from './components/Card'

class App extends React.Component {
	render () {
		return (
			// <div className="container">
				  // <Popular />
			// </div>
      <div className="flexbox">

        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>

        <Board id="board-3" className="board">
          <Card id="card-3" className="card" draggable="true">
            <p>Card Three</p>
          </Card>
        </Board>

        <Board id="board-4" className="board">
          <Card id="card-4" className="card" draggable="true">
            <p>Card Four</p>
          </Card>
        </Board>

        <Board id="board-5" className="board">
          <Card id="card-5" className="card" draggable="true">
            <p>Card Five</p>
          </Card>
        </Board>

      </div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))
