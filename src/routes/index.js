import { Switch, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { PlayList } from '../pages/playlist'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/playlist">
                <PlayList/>
            </Route>
        </Switch>
    )
}