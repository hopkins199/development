import './Header.css'
import watto from './WattoHS.jpg'

function Header() {
    return(
        <div className='header'>
            <div className='header_title'>
                <h1>Watto's Grotto</h1>
            </div>
            <div className='header_link'>
                <a href='/'>Home</a>
                <a href='/inventory'>Inventory</a>
                <a href='/cart'>Cart</a>
            </div>
            <img src={watto} alt='' />
        </div>
    )
}

export default Header