import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Contact, 
  Info, 
  Zap, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

const MainNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { 
      icon: Home, 
      label: 'Home', 
      path: '/' 
    },
    { 
      icon: Info, 
      label: 'About', 
      path: '/about' 
    },
    { 
      icon: Contact, 
      label: 'Contact', 
      path: '/contact' 
    },
    { 
      icon: Zap, 
      label: 'Features', 
      path: '/features' 
    }
  ];

  return (
    <div 
      className={`
        fixed left-0 top-0 h-screen 
        bg-gray-800 text-white 
        transition-all duration-300 
        flex flex-col 
        ${isExpanded ? 'w-64' : 'w-20'}
        hover:w-64
        group
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <div className={`
          flex items-center 
          ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
          transition-opacity
        `}>
          <span className="text-xl font-bold ml-2">H4B</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow mt-8">
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className={`
              flex items-center 
              p-3 
              hover:bg-gray-700
              ${location.pathname === item.path ? 'bg-gray-600' : ''}
              group/item
            `}
          >
            <item.icon className="w-6 h-6 mx-3" />
            <span className={`
              whitespace-nowrap 
              ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}
              group-hover/item:opacity-100 
              group-hover/item:w-auto
              transition-all duration-300
              overflow-hidden
            `}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;