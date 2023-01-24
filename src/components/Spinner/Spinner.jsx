import React from "react";

const Spinner = () => {
  
return(
<div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full text-[#b9cdd2]" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
);
}
export default Spinner