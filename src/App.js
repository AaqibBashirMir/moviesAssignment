import logo from './logo.svg';
import './App.css';
import ColorCards from './Components/ColorCards';
import colors from './Components/Color.json';
import Movies from './Components/Movies';
import dataList from './Components/Movies.json'


function App() {
  return (
    <div className="App" >
        <h1 style={{
          textAlign:"center"
        }}>ColorPicker</h1>
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      alignItems: "center",
      padding:"100px",
      margin:"40px",
      boxShadow:"0 0 5px yellow",
      borderRadius:"20px",
      background:"linear-gradient(yellow,red)"
    }}>



    {
        colors.map((color)=> <ColorCards name={color.name} colorCode={color.colorcode} />)
    }
    </div>
    <h1 style={{
          textAlign:"center"
        }}>MoviesHub</h1>
    <div style={{
      border:"1px solid gray",
      margin:"40px",
      borderRadius:"20px",
      background:"linear-gradient(black,white)"
    }}>
    {
      dataList.map((data,idx)=><Movies key={idx} img={data.Images[0]} title={data.Title}  />)
    }

    </div>
   
    </div>
  );
}

export default App;
