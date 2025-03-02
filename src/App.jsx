import './App.css'
import NameForm from './components/nameForm'
//import ToggleButton from './components/ToggleButton'
// import Counter from './components/counter'
// import Card from './components/card'

function App() {
 
  // const items = ['React', 'Vue', 'Angular', 'Svelte']

  return (
    <>
      <section>
        <h2>Form </h2>
        <NameForm/>
      {/* <h1>Toggle button (Renderizado)</h1>
      <ToggleButton/> */}

        {/* <h1>Manejo de estado</h1>

        <Counter></Counter> */}
        {/* <Card
          title="Curso de React"
          description="Aprende React desde cero"
          price="$50">
        </Card>

        <Card
          title="Curso de Javascript"
          description="Aprende Javascript ya!"
          price="$150">
        </Card>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </section>
    </>
  )
}

export default App
