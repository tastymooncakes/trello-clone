import './App.css'
import Board from './components/Board'
import { BoardProvider } from './context/BoardContext'

function BoardContent() {


  return (
    <div className='bg-blue-400 min-h-screen min-w-screen p-2'>
      <Board />
    </div>
  )
}

function App() {
  return (
    <BoardProvider>  {/* Wrap with provider */}
      <BoardContent />
    </BoardProvider>
  )
}

export default App
