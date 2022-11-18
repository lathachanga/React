import CompA from './src/components/CompA'
import User from './src/data/User'
function App(){
        return  <div>
            <h1> App component</h1>
            <hr/>
            <CompA/>
            <button class="btn btn-success">test</button>
            <hr/>
            <User/>
        </div>
}
export default App