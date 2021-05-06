
import './App.css';
import Profilecomponent from './Profile/Profile component'
import img from './img1.png'
function App() {
const handleAlert=(fullname)=>{
  alert(`hi my name is ${fullname}`)
}
  return (
    <div className="App" >
      <Profilecomponent  bio={ 25 } profession='Engineer' 
      handleAlert={handleAlert}
      >
        <div>
          <img src={img} alt='' width='500px'/>
        </div>
        </Profilecomponent>
    </div>
  );
}

export default App;
