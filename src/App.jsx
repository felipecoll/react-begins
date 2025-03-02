// import Card from './components/card'
import './App.css'
import Counter from './components/counter'

function App() {
 
  const items = ['React', 'Vue', 'Angular', 'Svelte']

  return (
    <>
      <section>
        <h1>Manejo de estado</h1>

        <Counter></Counter>
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
