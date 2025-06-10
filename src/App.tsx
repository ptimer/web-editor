import './App.css'
import { Header, Sidebar, Editor, Preview } from '@/components'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <Editor />
        <Preview />
      </main>
    </div>
  )
}

export default App
