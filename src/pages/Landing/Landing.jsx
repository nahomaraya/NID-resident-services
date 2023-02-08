import React from 'react'

import {FaBookOpen} from 'react-icons/fa';
import {GrUpdate} from 'react-icons/gr';
import {AiFillLock} from "react-icons/ai";
import {BiStreetView} from 'react-icons/bi';

const Landing = () => {
    return (
        <div className='all-container'>
           <header className="header">
    
    <img src="image/logo.png" className="logo-id" style={{marginLeft: "-80px;"}}></img>
     
    
    
         <nav className="navbar">
             <a href="#Home" style={{color:"#47f4c7"}} > Home</a>
            <a href="#Service"> Services</a> 
             <a href="#About"> About-Us</a>   
             <a href="#Contact">Contact-us</a>
             <a href="#" style={{marginLeft:" 400px;", color:" #184e66;", fontSize: "15px;" }}className="lang">Language</a>
         </nav>
  </header>
  

  <section className="home"  id="Home" >
  
    <h6 className="text-anim">Welcome to National ID Resident Serivces</h6>
      <h2>NID Resident Services</h2>
      <a href="#" class="btn">Get-Started</a>
  
  </section>
  
  
  <section className="sectionnn"  style={{marginBottom: "150px;"}} >
    <div class="contentt">
      <div class="col-12">
        <h1 style={{color:"white", fontSize:"30px", fontWeight:"bolder"}}>Resident Services</h1>
    
  
      
    </div>
    </div>
      
    
  </section>


  <h1 class="heading">Our services</h1>
 
  <div class="wrapper"  id ="Service">

        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
  
                <div class="iconbox">
                  <FaBookOpen></FaBookOpen>
                </div>
                
                <div class="content">
                  <h2>Track Request Status </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;" }}class="bbtton">Track</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Track Request Status </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;" }}><a href='track'>Track</a></button>
                </div>
              </div>
            </div>
          </div>
        </a>  
  
        <a href="" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
  
                <div class="iconbox">
                 <GrUpdate/>
                </div>
                <div class="content">
                  <h2>Update Demographic Data</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;"  }}class="bbtton">Update</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Update Demographic Data</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;"  }}>Update Demographic Data</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
                 <AiFillLock/>
                </div>
                <div class="content">
                  <h2>Lock/Unlock Auth Types</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;" }}class="bbtton">Lock/Unlock </button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Lock/Unlock Auth Types</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;"  }}>Lock/Unlock Auth Types</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
             <BiStreetView></BiStreetView>
                </div>
                <div class="content">
                  <h2>View Auth types transaction History</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;" }}  class="bbtton">View</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>View Auth types transaction History</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;"  }}>View</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class=""></div>
      <div class="wrapperr" style={{marginTop: "-30px;"}} >
        
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
                 <BiStreetView/>
                </div>
                <div class="content">
                  <h2>Download e-UIN </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;"  }}  class="bbtton">Download</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Download e-UIN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;"  }}>Download</button>
                </div>
              </div>
            </div>
          </div>
        </a>  
  
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
              <BiStreetView/>
                </div>
                <div class="content">
                  <h2>Reprint UIN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;"  }}class="bbtton">Reprint</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Reprint UIN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;" }}>Reprint</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
                 <BiStreetView/>
                </div>
                <div class="content">
                  <h2>Generate virtual ID</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;"  }} class="bbtton">Generate</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Generate virtual ID</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;"  }}>Generate</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" class="box">
          <div class="single-box">
            <div class="box-content">
              <div class="sides side-1" >
                <div class="iconbox">
             <AiFillLock/>
                </div>
                <div class="content">
                  <h2>Revock Virtual ID</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"white", backgroundColor:"#47f4c7", fontSize:"15px", padding:"0.5rem 1rem", border: "none;"  }} class="bbtton">Revock</button>
                </div>
              </div>
              <div class="sides side-2">
                <div class="content">
                  <h2>Revock Virtual ID</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium, maiores similique est aliquam laborum!</p>
                  <button style ={{color:"rgb(5,4,4)", backgroundColor:"#47f4c7",  fontSize:"15px", padding:"0.5rem 2rem", border: "none;" }}>Revock</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      
  
  

  <div class="bo"><h1 class="abou" style={{textAlign:"center", fontSize:"50px", marginTop: "-200px"}} >About-us</h1></div>
  <section class="sectionn" id="About" >
   
    <div class="content">
      <h1 style={{color:"white", fontSize:"28px"}}>Resident Services</h1>
      <p  class="par">Resident services are the self services which is used by the resident 
        themselves via a portal. Functionalities such as lock/unlock authentication types, 
        reprint UIN, view authentication history etc. are available. 
        The services use OTP method of authentication.
        In any ID system, identifying numbers—including unique ID numbers (UINs), 
        also sometimes known as national ID numbers (NINs)—are the most basic type of identifier. 
        They are issued automatically when a person enrolls.
        </p>
        <img src="./about.png" style={{marginTop:"0PX",  height:"170px", width:"700px"}} class="img" ></img> 
    </div>
      
    
  </section>
  
  
  

  <h1 style={{ textAlign:"center", fontSize:"50px", marginTop:"100px"}}>Contact-US</h1>
  <section class="cont" id="Contact" >
    <div class="overlay" style={{ background: "linear-gradient(115deg, #56d8e4 10%, #47f4c7)", opacity:"0.4"}}></div>
    <div class="container">
      <div class="text">Get in touch</div>
      <form action="#">
         <div class="form-row">
            <div class="input-data">
               <input type="text" required></input>
               <div class="underline"></div>
               <label for="">Name</label>
            </div>
            
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required></input>
               <div class="underline"></div>
               <label for="">Email</label>
            </div>
           
         </div>
         <div class="form-row">
            <div class="input-data textarea">
               <textarea rows="8" cols="80" required></textarea>
               <br />
               <div class="underline"></div>
               <label for="">Write your message</label>
               <br />
               <div class="form-row submit-btn">
                  <div class="input-data">
                     <div class="inner"></div>
                     <input type="submit" value="submit"></input>
                  </div>
               </div>
            </div>
         </div>
      </form>
    </div>
      
  </section>
  

  
  
     
        </div>
    );
}

export default Landing;