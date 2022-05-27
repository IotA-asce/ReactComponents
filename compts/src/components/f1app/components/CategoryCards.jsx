import React, { useEffect, useState } from 'react'

const CategoryCards = ({ cname, query, setClicked, sname, setSname }) => {

  const [classNameContainer, setClassNameContainer] = useState('f1aCategoryCards');
  const [classNameCname, setClassNameCname] = useState("f1aCname");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setClassNameContainer("f1aCategoryCards")
    setClassNameCname("f1aCname");
  }, [])


  return (
    <div
      className={
        classNameContainer
      }
      style={
        {
          backgroundImage: `url(https://source.unsplash.com/random?${query})`,
          backgroundSize: "cover",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }
      }
      onClick={() => {
        setSelected(true)
        setClassNameContainer('f1aCategoryCardsActive')
        setClassNameCname(text => text + " active")
        setClicked(true)
        setSname(cname);
      }}
    >
      <div className={classNameCname}>{cname}</div>
      {
        selected &&
        <div className='innerCards'>
          <InnerCards icname={"Charles Leclerc"} />
          <InnerCards icname={"Max Verstappen"} style={{animationDelay : '0.4s'}}/>
        </div>
      }
    </div>

  )
}

const InnerCards = ({ icname }) => {

  const [query, setQuery] = useState();

  useEffect(() => {
    setQuery(icname.toString().replace(" ", ""));
  }, [])

  return (
    <div
      className='innerCard'
      style={{
        backgroundImage: `url(https://source.unsplash.com/random?${query})`,
        backgroundSize: "cover",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>{icname}</div>
    </div>
  )
}

export default CategoryCards