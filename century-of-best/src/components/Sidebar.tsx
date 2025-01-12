import React from 'react';
import { ChatBubbleLeftRightIcon, ChartBarIcon, Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Page } from '../App';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navigation = [
    { name: 'Threads', page: 'threads' as const, icon: ChatBubbleLeftRightIcon },
    { name: 'Daily Summary', page: 'daily-summary' as const, icon: DocumentTextIcon },
    { name: 'Real-Time Insights', page: 'real-time-insights' as const, icon: ChartBarIcon },
    { name: 'Settings', page: 'settings' as const, icon: Cog6ToothIcon },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                    currentPage === item.page
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div>
                <div className="text-sm font-medium text-gray-900">Status: Online</div>
                <div className="text-xs text-gray-500">Last synced: 5 minutes ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

