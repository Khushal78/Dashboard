import React from 'react';

const Threads: React.FC = () => {
  const threads = [
    { id: 1, name: 'John Doe', platform: 'WhatsApp', lastMessage: 'Hey, how are you?', timestamp: '5m ago' },
    { id: 2, name: 'Jane Smith', platform: 'Slack', lastMessage: 'Can you review the document?', timestamp: '1h ago' },
    { id: 3, name: 'Bob Johnson', platform: 'Telegram', lastMessage: 'Meeting at 3 PM', timestamp: '2h ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Threads</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {threads.map((thread) => (
            <li key={thread.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{thread.name}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {thread.platform}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {thread.lastMessage}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{thread.timestamp}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Threads;

