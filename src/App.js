import "./App.css";
import Estimator from "./components/estimator/estimator";
import ProjectType from "./components/input-components/project-type/project-type";
import { Provider } from 'react-redux';
import {store} from './redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Estimator title={"Development Cost Estimator"}>
          <ProjectType />
        </Estimator>
      </div>
    </Provider>
  );
}

export default App;
