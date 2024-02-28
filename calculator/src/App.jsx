import "./app.css"
import { useState } from "react"
const numberButtonClasses='btn btn-outline-primary w-100'
const green='btn btn-outline-success w-100'
const yellow='btn btn-outline-warning w-100'
const gray='btn btn-outline-secondary w-100'
const operatorButtonClasses='btn btn-warning w-100'
const specialButtonClasses='btn btn-danger w-100'
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
eval(`${display.previousvalue}/100*${display.value}`):
eval(`${display.previousvalue} ${display.operator}${display.value}`)



  setDisplay({
    ...display,
    value:result,
    operatorhasbeenpressed:false,
    hasPoint:false,
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
        value:display.value + value,
        hasPoint:true
      })
      return
    }

    if(display.value==='0'){

    setDisplay({
     ...display,
     value: value
    })

  } else{
    setDisplay({
      ...display,
      value:display.value + value,
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


  return (
    <div>
    <h1 className="text-center">calculator</h1>
    <table className="center">
      <tbody>
        <tr>
          <td className="text-end" colSpan={4}>
            <h2 class="badge text-bg-primary">{display.value}</h2>
          </td>
          </tr>
        <tr>
          <td className="text-center">
            <button className={specialButtonClasses}
            type='button'
            onClick={()=>clearDisplay('0')}
            >C</button>
          </td>
          <td className="text-center">
            <button className={specialButtonClasses}
            type="button"
            onClick={deletlastcharacter}>{'<'}</button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button"
            onClick={() => setOperator('%')}>%</button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button"
            onClick={()=>setOperator('/')}>
              /
              </button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ green}
            type="primary"
            onClick={()=>updateDisplay('7')}>
7
            </button>
          </td>
          <td className="text-center">
            <button className={ green}
            type="primary"
            onClick={()=>updateDisplay('8')}>
8
            </button>
          </td>
          <td className="text-center">
            <button className={ green}
            type="primary"
            onClick={()=>updateDisplay('9')}
           >
9
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button"
           onClick={()=>setOperator('*')} >
X
            </button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ yellow}
            type="primary"
            onClick={()=>updateDisplay('4')}>
4
            </button>
          </td>
          <td className="text-center">
            <button className={ yellow}
            type="primary"
            onClick={()=>updateDisplay('5')}>
5
            </button>
          </td>
          <td className="text-center">
            <button className={ yellow}
            type="primary"
            onClick={()=>updateDisplay('6')}>
6
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button"
            onClick={()=>setOperator('-')}>
-
            </button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary"
            onClick={()=>updateDisplay('1')}>
1
            </button>
          </td>
          <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary"
            onClick={()=>updateDisplay('2')}>
2
            </button>
          </td>
          <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary"
            onClick={()=>updateDisplay('3')}>
3
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button"
            onClick={()=>setOperator('+')}>
+
            </button>
          </td>
        </tr>
        <tr>
          <td className="text-center" colSpan={2}>
          <button className={ gray}
          type="primary"
          onClick={()=>updateDisplay('0')}>0</button>
          </td>
          
          <td className="text-center">
            <button className={ gray}
            type="primary"
            onClick={()=>updateDisplay('.')}>
.
            </button>
          </td>
          <td className="text-center">
            <button className={specialButtonClasses}
            type="button"
            onClick={calculate}>
=
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   
  )
}

export default App