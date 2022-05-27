import React from 'react'

const Header = () => {
  return (
    <div className='f1aHeader' style={{width: '94%', display: 'flex', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#000', padding: '1em'}}>
        <div className='f1aLogoImage' style={{ fontSize: '2em', fontWeight: '900', color: "#EEE"}}>F1</div>
        <div className='f1ahBurger'>
            <div style={{width: '3em', height: "0.5em", backgroundColor: '#EEE', borderRadius: '1em', margin: '0.3em'}}></div>
            <div style={{width: '3em', height: "0.5em", backgroundColor: '#EEE', borderRadius: '1em', margin: '0.3em'}}></div>
            <div style={{width: '3em', height: "0.5em", backgroundColor: '#EEE', borderRadius: '1em', margin: '0.3em'}}></div>
        </div>
    </div>
  )
}

export default Header