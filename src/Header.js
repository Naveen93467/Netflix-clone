import React,{useState, useEffect} from 'react'
import './Header.css'

function Header() {
    const [show, handleShow] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", function
        listener() 
       {
            if(window.scrollY > 100){
                handleShow(true)
            }else  handleShow(false)
        

        return () => {
            window.removeEventListener("scroll",listener)
        }
    })
    }, [])

  return (
    <div className={`header ${show && "header_black"}`}>
       <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  alt="Netflix logo" />
       <img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  alt="user icon"   />
    </div>
  )
}

export default Header