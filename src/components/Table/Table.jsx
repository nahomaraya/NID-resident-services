import React from "react";
import './Table.css';


const Table = (props) => {
    
     return(
      <div>
         <table class="w-full flex flex-row flex-no-wrap  rounded-lg overflow-auto sm:shadow-lg my-5">
			<thead class="text-white text-sm w-1/3">
            {props.data.map(data => (

                <tr class="bg-[#6aa2be] flex flex-col flex-no wrap md:table-row rounded-l-lg rounded-none mb-2 pt-2 ">
                            {props.columns.map(column =>(<th class="p-3 text-left lg:text-xl md:text-base">{column}</th>))}


                </tr>
            ))}
           
			</thead>
			<tbody class="flex-1 sm:flex-none text-sm">
          
                {props.data.map(data=>(
                    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 bg-[#f1f7fa]">
                    	<td class="border-grey-light border hover:bg-gray-100 p-3 mt-2">{data.authType}</td>
                        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate ">{data.date}</td>
                        <td class="border-grey-light border hover:bg-gray-100 p-3 ">{data.time}</td>
                        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate ">{data.transactionID}</td>
                    </tr>
                ))}
			
			</tbody>
		</table>
      </div>

     );


}
export default Table;