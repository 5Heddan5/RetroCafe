const buttons = [{ name: "Hot" }, { name: "Juicy" }, { name: "Cozy" }];

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="buttons">
          {buttons.map((button, index) => {
            return (
              <button className="button" key={index}>
                {button.name}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
