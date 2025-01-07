import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-start px-4 md:px-6">
        <Logo />
        <span className="sr-only">JS Project</span>
      </div>
    </header>
  );
};

export default Header;
