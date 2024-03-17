import Logo from "../assets/frame.png";

export default function Navbar() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center gap-x-6">
        <img className="h-[45px]" src={Logo} alt="Lws" />
        <h1 className="text-2xl text-[#f5bf42] font-semibold">Tasker</h1>
      </div>
    </nav>
  );
}
