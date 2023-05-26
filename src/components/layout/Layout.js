import Navigation from '../navigation/Navigation'
import Loader from './Loader'
import { useContext } from 'react'
import ApiContext from '../../utils/ApiContext'

const Layout = ({ children }) => {
    const { response } = useContext(ApiContext)

    return (
        <>
            <header>
                <Navigation />
            </header>

            <main>
                { children }
                {response == null && (
                    <Loader />
                )}
            </main>

            <footer>SpaceX by Corentin, Nathan & Romain</footer>
        </>
    )
}

export default Layout
