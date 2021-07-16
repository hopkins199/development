import './Header.css'
import {Link} from 'react-router-dom'


function Header(props) {
    return(
        <div className='header'>
            <div className='header_title'>
                <h1>Watto's Junkyard</h1>
            </div>
            <div className='header_link'>
                <Link to={`/`}>Home</Link>
                <Link to={`/${props.path2}`}>Inventory</Link>
                <Link to={`/${props.path3}`}><p className='cart_icon'>🛒</p></Link>
            </div>
            {/* <img src={watto} alt='' className='watto_header' /> */}
        </div>
    )
}

export default Header