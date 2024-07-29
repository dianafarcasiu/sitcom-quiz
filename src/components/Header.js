import retroTv from "../imgs/retro-tv.png";

function Header() {
  return (
    <header className=" mb-8">
      <img src={retroTv} alt="retro tv" className="w-32 md:w-36 m-auto pb-4" />
      <h1 className="title text-4xl md:text-5xl">The Ultimate Sitcom Quiz </h1>
    </header>
  );
}

export default Header;
