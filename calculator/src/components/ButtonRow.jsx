import { Button } from "./Button"
export const ButtonRow =({row})=>{
    return(
<tr>
    {
        row.map((button)=>{
            return(
                <Button key={button.label}
                {...button}
                
                
                
                />
            )
        })
    }
</tr>
    )
}