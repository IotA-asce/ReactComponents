import React, { useState } from 'react'
import CategoryCards from './components/CategoryCards';
import Header from './components/Header';
import './styles/f1appStyles.css';

const F1app = () => {

    const [clicked, setClicked] = useState(false);
    const [sname, setSname] = useState("home");

    return (
        <div className='f1aContainer'> {/* device container */}
            <Header />
            {
                !clicked && 
                <h1>Standings</h1>
            }
                <div>
                    { (sname === "home" || sname === "Drivers") && <CategoryCards cname={"Drivers"} query={"formula1"}     setClicked={setClicked} sname={sname} setSname={setSname} />}
                    { (sname === "home" || sname === "Constructors") && <CategoryCards cname={"Constructors"} query={"formula"} setClicked={setClicked} sname={sname} setSname={setSname} />}
                </div>
        </div>
    )
}

export default F1app