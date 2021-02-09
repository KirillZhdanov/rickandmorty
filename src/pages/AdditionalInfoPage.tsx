import React, { ReactElement } from 'react'

interface Props {
    character:{
        id:number,
        name:string,
        image:string,
        status:string,
        gender:string,
        species:string,
        location:{
            name:string
        }
    }
}

function AdditionalInfoPage({character}: Props): ReactElement {
    return (
        <div>
            
        </div>
    )
}

export default AdditionalInfoPage
