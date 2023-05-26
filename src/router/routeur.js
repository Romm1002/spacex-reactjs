import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import NoMatch from '../error/NoMatch'
import CompanyPage from '../pages/CompanyPage'
import ListHistory from '../pages/ListHistory'
import History from '../pages/History'
import CrewDetails from '../pages/CrewDetails'
import Rockets from '../pages/Rockets'
import RocketsDetails from '../pages/RocketsDetails'
import Roadster from '../pages/Roadster'
import Quizs from '../pages/Quiz'
import QuizQuestions from '../pages/QuizQuestions'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/company' element={<CompanyPage />}></Route>
                    <Route path='/history' element={<ListHistory />}></Route>
                    <Route path='/history/:id' element={<History />}></Route>
                    <Route path='/member/:id' element={<CrewDetails />}></Route>
                    <Route path='/rockets' element={<Rockets />}></Route>
                    <Route path='/rockets/:id' element={<RocketsDetails />}></Route>
                    <Route path='/roadster' element={<Roadster />}></Route>
                    <Route path='/quiz' element={<Quizs />}></Route>
                    <Route path='/quiz/:id' element={<QuizQuestions />}></Route>
                    <Route path='*' element={<NoMatch />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
