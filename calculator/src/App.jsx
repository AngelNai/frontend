import "./app.css"
import { useState } from "react"
import { buttons } from "./assets/buttons"
import {ButtonRow} from "./components/ButtonRow"

const green='btn btn-outline-success w-100'
const yellow='btn btn-outline-warning w-100'
const gray='btn btn-outline-secondary w-100'





//---------------------------------------------
function App() {
  const [display, setDisplay]=useState({
    value:'0',
    hasPoint:false,
    previousvalue:'0',
    operatorhasbeenpressed:false,
    operator:''

  })


//-----------------------------------------------
const setOperator =(operator)=>{
  setDisplay({
    ...display,
    previousvalue:display.value,
    operatorhasbeenpressed:true,
    hasPoint:false,
    value:'0',
    operator
  })
} 
//-----------------------------------------------
const calculate=()=>
{
  if(!display.operatorhasbeenpressed){
   return
  }
 // let result=0
//if(display.operator==='%'){
//result=eval(`${display.previousvalue}/100 * ${display.value}`)

//}else{
  //result=eval(`${display.previousvalue}${display.operator}${display.value}`)
let result=(display.operator==='%')?
eval(`${display.previousvalue}/ 100 *${display.value}`):
eval(`${display.previousvalue} ${display.operator}${display.value}`)



result=result+""



  setDisplay({
    ...display,
    value:Limit(result),
    operatorhasbeenpressed:false,
    hasPoint:result.includes("."),
    previousvalue:'0'
  })
}
//-----------------------------------------------

  const updateDisplay=(value)=>{
    if(value==='.'){
      if(display.hasPoint){
return
      }
      setDisplay({
        ...display,
        value:Limit(display.value + value),
        hasPoint:true
      })
      return
    }

    if(display.value==='0'){

    setDisplay({
     ...display,
     value: Limit(value)
    })

  } else{
    setDisplay({
      ...display,
      value:Limit(display.value + value),
    })
  }
}
//-----------------------------
const clearDisplay=(value)=>{
setDisplay({
  ...display,
  value:value,
  hasPoint:false

})
}
//-------------------
const deletlastcharacter=()=>{
  setDisplay({
    ...display,
    value:display.value.slice(0,-1),
    hasPoint:(display.value.slice(-1)==='.') ? false:display.hasPoint


  })
  if(display.value.length===1){
    setDisplay({
      ...display,
      value:'0'
    })
  }
   
}
const Limit=(string ='',length=10)=>{
  return string.slice(0,length)

}
const buttonsFunctions={
  updateDisplay,
  clearDisplay,
  deletlastcharacter,
  setOperator,
  calculate
}
  return (
    <div>
    <h1 className="text-center">calculator</h1>
    <table className="center">
      <tbody>
        <tr>
          <td className="text-end" colSpan={4}>
            <h2 className="badge text-bg-primary">{display.value}</h2>
          </td>
          </tr>
       {
        buttons.map((row,index)=>{
          return(
            <ButtonRow key={index} row={row}/>
          )
        })
       }
      </tbody>
    </table>
  </div>
   
  )
}

export default App