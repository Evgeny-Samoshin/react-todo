import './App.scss';
import searchIcon from './assets/icons/search.svg';
import bellIcon from './assets/icons/bell.svg';
import avatar from './assets/img/avatar1.svg';
import female1 from './assets/img/female1.svg';
import male1 from './assets/img/male1.svg';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <form className="search-form">
          <label><img src={searchIcon} alt="icon"></img></label>
          <input type="text" placeholder="Search for any training you want"></input>
        </form>
        <div className="notification"><img src={bellIcon} alt="bell-icon"></img></div>
        <div className="profile"><img src={avatar} alt="avatar"></img></div>
      </header>
      <main>
        <div className="head-block">
          <h1>You’ve got <span>7 task</span> today </h1>
          <button><span>+</span>Add new</button>
        </div>
        <div className="main-block">
          <div className="on-hold">
            <h2>On Hold</h2>
            <ul className="task-list">
              <li className="task-list__item">
                <span>Evaluate the addition and deletion of user IDs.</span>
                <div className="progress-status">In Progress</div>
                <div className="priority">Normal</div>
                <ul className="team-list">
                  <li className="team-list__item">
                    <img src={female1} alt="teammate"></img>
                  </li>
                </ul>
                <div className="options"></div>
              </li>
              <li className="task-list__item">
                <span>Evaluate the addition and deletion of user IDs.</span>
                <div className="progress-status">In Progress</div>
                <div className="priority">Normal</div>
                <ul className="team-list">
                  <li className="team-list__item">
                    <img src={female1} alt="teammate"></img>
                  </li>
                </ul>
                <div className="options"></div>
              </li>
            </ul>
          </div>
          <div className="compleated">
            <h2>Compleated</h2>
            <ul className="task-list">
              <li className="task-list__item">
                <span>Evaluate the addition and deletion of user IDs.</span>
                <div className="progress-status">In Progress</div>
                <div className="priority">Normal</div>
                <ul className="team-list">
                  <li className="team-list__item">
                    <img src={female1} alt="teammate"></img>
                  </li>
                  <li className="team-list__item">
                    <img src={male1} alt="teammate"></img>
                  </li>
                </ul>
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
