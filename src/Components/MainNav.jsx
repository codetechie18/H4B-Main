import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Image as GalleryIcon,
  Users,
  Trophy,
  Calendar,
  HelpCircle,
  Phone
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: GalleryIcon, label: 'Gallery', path: '/gallery' },
    { icon: Users, label: 'Partners', path: '/partners' },
    { icon: Trophy, label: 'Prize', path: '/prize' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Users, label: 'Humans', path: '/humans' },
    { icon: HelpCircle, label: 'FAQs', path: '/faqs' },
    { icon: Phone, label: 'Contact', path: '/contact' }
  ];

  return (
    <div
      className={`
        fixed left-0 top-0 h-screen
       backdrop-blur-xl text-gray-300
        transition-all duration-300 ease-in-out
        flex flex-col
        ${isExpanded ? 'w-56' : 'w-16'}
        z-50
        shadow-xl
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="flex-grow py-8">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center
                py-3 px-4
                transition-all duration-200
                hover:text-white
                ${isActive ? 'text-white bg-gray-800/70' : ''}
                hover:bg-gray-800/70
                group
              `}
            >
              <div className="flex items-center w-full">
                <item.icon className="w-6 h-6 flex-shrink-0" />
                <span
                  className={`
                    ml-4
                    whitespace-nowrap
                    transition-all duration-200
                    ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
                  `}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;