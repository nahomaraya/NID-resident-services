import React, {useCallback, useState} from "react";
import {FormattedMessage} from "react-intl";

const Description = (props) => {

    return(
        <div class="bg-[#dce6e8]">
            <div class="md:container mx-auto bg-[#dce6e8] rounded-lg p-14">
                <p class="text-center font-bold text-[#304f55] text-2xl">
                <FormattedMessage id={props.inst}/>  
                </p>

            </div>
        </div>
        
    );

}
export default Description;