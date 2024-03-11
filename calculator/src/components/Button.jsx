
import { buttonsClasses } from "../assets/buttonsClasses"
export const Button = ({
  class:buttonClass, 
  label,
   function:buttonFunction, 
   columns
}) => {
  return (
    <td>
    <button 
    type='button'
    className={buttonsClasses[buttonClass]}
            onClick={()=>console.log('clicked')}
            >
                
                {label}
                </button>
                </td>
  )
}
