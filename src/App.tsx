import './App.css'
import Lists from './components/Lists'
import { BoardProvider, useBoardContext } from './context/BoardContext'

function BoardContent() {

  const { lists } = useBoardContext()      

  return (
    <div className='bg-blue-400 min-h-screen min-w-screen p-2'>
      <div className='overflow-x-auto flex flex-row space-x-2 '>
          {lists.map((list) => (
            <Lists key={list.id} {...list} />
          ))}
      </div>

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
