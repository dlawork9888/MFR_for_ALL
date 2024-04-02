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
          width:400
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
            width:40,
            marginRight:5
          }}
        />
        <img
          src={comingsoon}
          alt='Coming Soon ...'
          style={{
            height:60
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
          className = 'AppText'
          style={{
            color: '#DDDDDD',
            marginLeft: 10,
            marginBottom:10,
          }}
        >
          (will be) Powered By TGLIM
        </div>
        <div
          className = 'AppText'
          style={{
            color: '#DDDDDD',
            marginRight:10,
            marginBottom:10,
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
