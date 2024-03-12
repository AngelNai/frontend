import { Button } from "./Button"
export const ButtonRow =({row,buttonsFunctions})=>{
    return(
<tr>
    {
        row.map((button)=>{
            return(
                <Button key={button.label}
                buttonsFunctions={buttonsFunctions}
                {...button}
                
                
                
                />
            )
        })
    }
</tr>
    )
}
ButtonsRow.propTypes={
    row:'array',
    buttonsFunctions:'object'
}