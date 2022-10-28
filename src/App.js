// import logo from './logo.svg';
import './App.css';
import DropFileInput from './components/DropFileInput'; function App() {
  const onFileChange = (files) => {
    console.log(files)
  }
  return (
    <div className='box'>
      <h2 className='header'> <p>React drop files inputs</p> </h2>
      <DropFileInput
        onFileChange={(files) => onFileChange(files)}
      />
    </div>
  );
}

export default App;
