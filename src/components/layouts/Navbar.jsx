import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamberger.svg';
import ProfileIcon from '../../assets/profile.svg';
import CartIcon from '../../assets/ShoppingCart.svg';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between dt:px-10 relative">

      {/* 왼쪽: 로고 & 데스크탑 nav */}
      <div className="flex items-center gap-8">

        {/* 데스크탑 nav */}
        <nav className="hidden dt:flex items-center gap-8 text-gray-700">
          <Link to="/">Home</Link>
        </nav>
      </div>

      {/* 오른쪽: 아이콘 및 햄버거 */}
      <div className="flex items-center gap-4 ml-auto">
        {/* 데스크탑용 아이콘 */}
        <div className="hidden dt:flex items-center gap-4 text-gray-700">
          <Link to="/profile">
            <img src={ProfileIcon} alt="profile" className="w-6 h-6" />
          </Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/shoppingcart">
            <img src={CartIcon} alt="cart" className="w-6 h-6" />
          </Link>
          <Link to="/shoppingcart">Go to Cart</Link>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className="block dt:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={HamburgerIcon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 px-4 dt:hidden z-10">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/signup" className="block py-2">Sign Up</Link>
          <Link to="/shoppingcart" className="block py-2">Cart</Link>
        </div>
      )}
    </header>
  );
};