import './App.css';
// MFR for ALL logo import 
import MFRforALLLogo from './images/MFRforALLLogo.png';
import comingsoon from './images/comingsoon.png';
import circlegif_white from './images/circlegif_white.gif'

function App() {
  return (
    <div 
      style={{ 
        backgroundColor: '#000000',
        display: 'flex', //
        flex:1, //
        flexDirection:'column', //
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
{/*MFR_for_ALL Logo*/}
      <img 
        src={MFRforALLLogo} 
        alt="MFR for ALL Logo" 
        style={{
          width:'40%'
        }}
      />

{/*comingsoon image*/}
      <div
        style={{
          display:'flex',
          flexDirection:'row',
          //backgroundColor: '#00000050',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={circlegif_white}
          style={{
            width:'4%',
            marginRight:'1%'
          }}
        />
        <img
          src={comingsoon}
          alt='Coming Soon ...'
          style={{
            width:'40%'
          }}
        />
      </div>
    </div>
  );
}

export default App;
