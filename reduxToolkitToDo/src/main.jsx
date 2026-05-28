import './index.css'
import { Provider} from 'react-redux'
import store from './app/store'

ReactDOM.render(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)