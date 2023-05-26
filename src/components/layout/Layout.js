import { useContext, useEffect, } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import ApiContext from '../../utils/ApiContext';

const Layout = ({ children }) => {

    const { reset } = useContext(ApiContext);

    let location = useLocation()

    console.log(location, reset);

    useEffect(() => {
        reset()
    }, [location])

    return (
        <>
            <header>
                <Navigation />
            </header>

            <main>{children}</main>

            <footer>SpaceX by Corentin, Nathan & Romain</footer>
        </>
    )
}

export default Layout
