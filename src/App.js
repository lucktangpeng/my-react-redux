
import './App.css';
import { connect } from "react-redux";
import * as actionCreators from './store/actions/count.action'
import { bindActionCreators } from "redux";
function App(props) {
  return (
    <div className="App">
      <button onClick={() => { props.increment_async(20) }}>+</button>
      { props.count }
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(App);
