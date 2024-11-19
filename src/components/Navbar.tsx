import { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TechEazy Consulting</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Courses</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Mock Interviews</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blogs</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">System Design</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">DSA</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Mock Interviews</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}