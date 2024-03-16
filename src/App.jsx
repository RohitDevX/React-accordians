import { useState } from 'react'
import data from './data';
import './App.css'

function App() {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection,SetEnableMultiSelection]=useState(false); 
  const [multiple,SetMultiple]=useState([]);
 const handlesingleselection=(id)=>{
    setSelected(id===selected? null : id);
 }
 const handleMultiSelection=(id)=>{
  let multidata=[...multiple];
  const indexofitem=multidata.indexOf(id);
  indexofitem===-1 ? multidata.push(id):multidata.splice(indexofitem,1);
  SetMultiple(multidata);
 }
 console.log(selected,multiple);
  return (
    <>
      <div className='wrapper'>
        <button onClick={()=>{SetEnableMultiSelection(!enablemultiselection)}}>Enable multi Selection</button>
        <div className='accordian'>
          {data && data.length > 0 ? 
          (data.map((dataitem) => (
            <div className='item'>
              <div onClick={enablemultiselection ?
                ()=>handleMultiSelection(dataitem.id) :
                ()=>handlesingleselection(dataitem.id)} className='title'>
              <h3>{dataitem.question}</h3>
              <span>+</span>
              </div>
              {

                enablemultiselection ? multiple.indexOf(dataitem.id)!==-1 ? 
                (<div className='content'>{dataitem.answer}</div>) : <div>{null}</div>
                : selected===dataitem.id ? <div className='content'>{dataitem.answer}</div> : null
              }
            </div>
          ))
          ):(<div>no data found here</div>)
          }
        </div>
      </div>
    </>
  )
}

export default App;
