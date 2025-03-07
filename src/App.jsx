import './App.css'
import { createContext, useState, useContext } from 'react'
import CounterWithReactMemo from './components/CounterWithReactMemo/CounterWithReactMemo'
//import Counter from './components/Counter/Counter.jsx'
//import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook.jsx'
//import SearchPost from './components/SearchPost/SearchPost.jsx'
//import StaticComponent from './components/StaticComponents/StaticComponent.jsx'
// import UserList from './components/UserList/UserList.jsx'
//import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading.jsx'
//import Button from './components/Button/Button'
// import Card from './components/Card/Card'
//import CounterWithEffect from './components/CounterWithEffect'
//import NameForm from './components/nameForm'
//import ToggleButton from './components/ToggleButton'
// import Counter from './components/counter'
// import Card from './components/card'

const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
  


function App() {
 
  // const items = ['React', 'Vue', 'Angular', 'Svelte']

  return (
      <ThemeProvider>
        {/* <ThemeButton /> */}
      
      <section>
        <CounterWithReactMemo />
        {/* <CounterWithCustomHook /> */}
        {/* <Counter/> */}
        {/* <SearchPost /> */}
        {/* <StaticComponent />
        <UserListWithLoading /> */}
        {/* <UserList /> */}
        {/* <Button>Hola</Button>
        <Button>Adios</Button> */}
        {/* <Card /> */}
        {/* <CounterWithEffect /> */}
        {/* <h2>Form </h2>
        <NameForm/> */}
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
      </ThemeProvider>
  )
}

export default App
