import { Link } from "react-scroll";

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  menuItems,
  active,
  setActive,
}) {
  return (
    <div
     className={`fixed top-24 left-1/2 -translate-x-1/2 w-75 
      bg-[#171719]/40 backdrop-blur-md border border-gray-800 
      rounded-2xl shadow-lg transition-all duration-500 
      md:hidden z-40
      ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      <ul className="flex flex-col items-center gap-6 py-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              smooth="easeInOutQuart"
              duration={800}
              spy={true}
              offset={-80}
              activeClass="active"
              onSetActive={() => setActive(item.link)}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg cursor-pointer transition-all duration-300 border-none
              ${
                active === item.link
                  ? "text-white font-semibold active"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
