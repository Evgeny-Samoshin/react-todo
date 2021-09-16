import './App.scss';
import searchIcon from './assets/icons/search.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="search-form">
          <label><img src={searchIcon} alt="icon"></img></label>
          <input type="text" placeholder="Search for any training you want"></input>
        </form>
        <div className="notification">icon-notification</div>
        <div className="profile">profile-icon</div>
      </header>
      <main>
        <div className="head-block">
          <h1>You’ve got 7 task today </h1>
          <button><i>+</i>Add new</button>
        </div>
        <div className="main-block">
          <div className="on-hold">
            <h2>on-hold</h2>
            <ul className="task-list">
              <li></li>
            </ul>
          </div>
          <div className="compleated">
            <h2>compleated</h2>
            <ul className="task-list">
              <li>
                <span>Evaluate the addition and deletion of user IDs.</span>
                <div className="progress-status">In Progress</div>
                <div className="priority">Normal</div>
                <div className="team"></div>
                <div className="options"></div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <aside>

      </aside>
    </div>
  );
}

export default App;
