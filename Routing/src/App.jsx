import { Routes } from 'react-router-dom';
import './App.css'
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  );
}
function Dashboard(){
  return <h1>This is Dashboard</h1>
}
function About(){
  return <h1>This is About</h1>
}
function Home(){
  return <h1>This is Home</h1>
}

export default App
