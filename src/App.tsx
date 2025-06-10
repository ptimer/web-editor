import './App.css'
import { Header, Sidebar, Editor, Preview } from '@/components'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="hidden flex-1 lg:flex">
        <Sidebar />
        <Editor />
        <Preview />
      </main>
      <div className="flex flex-1 items-center justify-center lg:hidden">
        <h1 className="text-custom-heading-01 text-center">
            Sorry, but there is no mobile version of this app yet.
            <br />
            Please use your desktop browser to view this app.
        </h1>
      </div>
    </div>
  )
}

export default App
