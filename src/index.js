import ReactDOMClient from 'react-dom/client'

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp'
// import { ConterWithCustomHook } from './components/01-useState/ConterWithCustomHook'
// import { SimpleForm } from './components/02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
// import { FocusScreen } from './components/04-useRef/FocusScreen'
// import { RealExampleRef } from './components/04-useRef/RealExampleRef'
// import { Layout } from './components/05-useLayoutEffect/Layout'
// import { Memorize } from './components/06-memos/Memorize'
// import { MemoHook } from './components/06-memos/MemoHook'
// import { CallbackHook } from './components/06-memos/CallbackHook'
// import { Padre } from './components/07-tarea-memo/Padre'
// este es otro comentario
import { ToDoApp } from './components/08-useReducer/ToDoApp'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render(<ToDoApp />)
