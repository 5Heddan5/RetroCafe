const buttons = [{ name: "Hot" }, { name: "Juicy" }, { name: "Cozy" }];

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="buttons">
          {buttons.map((button) => {
            return (
              <button className="button" key={button.name}>
                {button.name}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
