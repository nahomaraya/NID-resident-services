import React, {useCallback, useState} from "react";
import {FormattedMessage} from "react-intl";

const Description = (props) => {

    return(
        
            <div class="rounded-lg lg:p-14 md:p-5 md:mt-5">
                <h6 class="font-bold text-[#edf2f3] lg:text-3xl md:text-base">
                <FormattedMessage id={props.inst}/>  
                </h6>

            </div>
       
    );

}
export default Description;