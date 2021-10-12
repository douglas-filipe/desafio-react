import { Switch, Route} from 'react-router-dom'
import { Home } from '../pages/home'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/playlist">
                <p>Sua playlist</p>
            </Route>
        </Switch>
    )
}