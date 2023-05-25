import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>SpaceX par Corentin, Nathan & Romain</footer>
    </>
  );
};

export default Layout;
