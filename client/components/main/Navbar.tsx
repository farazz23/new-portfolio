import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();

  const navItems = [
    {
      id: 0,
      title: 'Home',
      href: '/',
    },
    {
      id: 1,
      title: 'About',
      href: '/about',
    },
    {
      id: 2,
      title: 'Experience',
      href: '/experience',
    },
    {
      id: 3,
      title: 'Project',
      href: '/project',
    },
    {
      id: 4,
      title: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <nav className="max-w-3xl mx-auto p-2 bg-white shadow-md rounded-full border border-gray-200">
      <div className="flex items-center justify-between px-2 py-1 rounded-full bg-gray-50">
        {navItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
          px-5 py-2 rounded-full font-medium  transition-transform duration-150
          ${
            isActive
              ? 'bg-gray-900 text-white shadow-sm'
              : 'text-gray-700 hover:text-gray-900'
          }
        `}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
