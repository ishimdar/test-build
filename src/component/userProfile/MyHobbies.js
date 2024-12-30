export default function MyHobbies() {
  return (
    <>
      <div className="title-2 row no-margin">
        <h2>My Hobbies</h2>
      </div>
      <div className="hobbies">
        <div className="row no-margin hoby-row">
          <ul className="hoby row no-margin">
            <li>
              <i className="fas fa-pencil-alt"></i> Writing
            </li>
            <li>
              <i className="fas fa-bicycle"></i> Cycling
            </li>
            <li>
              <i className="fas fa-futbol"></i> Foosball
            </li>
            <li>
              <i className="fas fa-film"></i> Movies
            </li>
            <li>
              <i className="fas fa-plane-departure"></i> Travel
            </li>
            <li>
              <i className="fas fa-gamepad"></i> Games
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
