import Header from './components/Header'

export default function App() {
  const title = "Task tracker"
  return (
    <div className="App">
      <Header title={title}/>
    </div>
  )
}
