import FeatherIcon from 'feather-icons-react';

function App() {
  return (
    <div className="navbar navbar-transparent safe-areas">
      <div className="navbar-bg"></div>
      <div className="navbar-inner">
        <div className="left">
          <a href="!" className="link icon-only newsman-notification">
            <FeatherIcon icon="bell"></FeatherIcon>
            <span className="badge color-red">1</span>
          </a>
        </div>
        <div className="right">
          <a href="!" className="link icon-only">
            <FeatherIcon icon="search"></FeatherIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
