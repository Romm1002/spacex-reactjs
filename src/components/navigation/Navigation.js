import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import ThemeMode from '../ThemeMode'
import { useContext } from 'react'
import ApiContext from '../../utils/ApiContext'

const Navigation = () => {
    const { reset } = useContext(ApiContext)

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand' href='/'>
                    <img
                        src={logo}
                        alt='Logo'
                        width='50'
                        height='24'
                        className='d-inline-block align-text-top'
                    />
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/' onClick={reset} className='nav-link' aria-current='page'>
                                Members
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/rockets' onClick={reset} className='nav-link' aria-current='page'>
                                Rockets
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/history' onClick={reset} className='nav-link' aria-current='page'>
                                History
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/roadster' onClick={reset} className='nav-link' aria-current='page'>
                                Roadster
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/company'  onClick={reset} className='nav-link' aria-current='page'>
                                About us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz'  onClick={reset} className='nav-link' aria-current='page'>
                                Quiz
                            </Link>
                        </li>
                    </ul>
                </div>
                <ThemeMode />
            </div>
        </nav>
    )
}

export default Navigation
