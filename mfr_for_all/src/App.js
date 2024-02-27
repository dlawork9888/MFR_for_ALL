import './App.css';
// MFR for ALL logo import 
import MFRforALLLogo from './images/MFRforALLLogo.png';
import comingsoon from './images/comingsoon.png';
import circlegif_white from './images/circlegif_white.gif'

function App() {
  return (
// full screen
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
{/*MFR_for_ALL Logo close*/}

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
{/*comingsoon image close*/}

{/* footer*/}
      <div
        style={{
          //backgroundColor: '#FFFFFF',
          position: 'absolute', // 절대 위치
          bottom: 0, 
          width: '100%', 
          display: 'flex', // Flexbox 
          justifyContent: 'space-between', //
        }}
      >
        <div
          style={{
            color: '#DDDDDD',
            marginLeft: 20,
            marginBottom:5,
          }}
        >
          (will be) Powered By TGLIM
        </div>
        <div
          style={{
            color: '#DDDDDD',
            marginRight: 20,
            marginBottom:5,
          }}
        >
          github.com/dlawork9888
        </div>
      </div>
{/* footer close*/}
    </div>
// full screen close
  );
}

export default App;
