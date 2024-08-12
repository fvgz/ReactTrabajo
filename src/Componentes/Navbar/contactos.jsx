import './contactos.css';

function Contactos() {
    return (
        <div>
    
            <h1 className='container'>Redes Sociales</h1>
            <p className='container2'>
                <div className='social-link'>
            <li className='recuadroenrec'>
            <a 
                href="https://instagram.com/ginebramakeupp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
                @GinebraMakeupp
                
            </a>
            </li>
           
        </div>
            <div className='social-link'>
            <li className='recuadroenrec'>
            <a
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
                @_giinebramakeup
                
            </a>
            </li>
        </div>
        <div className='social-link'>
            <li className='recuadroenrec'>
            <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
               WhatsApp
                
            </a>
            </li>
        </div>
            </p>
        </div>
    )

}

export default Contactos;