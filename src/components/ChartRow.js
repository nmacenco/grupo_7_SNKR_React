import React from 'react';


function ChartRow(props){
    return (
                <tr>
                     <td>{props.name}</td>
                     <td>{props.price}</td>
                     <td>{props.gender}</td>
                     <td>{props.brand}</td>

                </tr>
            )
    }
    
        

export default ChartRow;