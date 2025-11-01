
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChapterView } from './components/ChapterView';
import { bookData } from './data/bookData';
import type { ChapterData } from './types';
import { BookIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);

  const selectedChapter = bookData.find(c => c.id === selectedChapterId);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="flex flex-col md:flex-row">
        <Sidebar 
          chapters={bookData} 
          selectedChapterId={selectedChapterId}
          onSelectChapter={setSelectedChapterId} 
        />
        <main className="flex-1 md:ml-64 lg:ml-72 xl:ml-80">
           <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 z-10 md:hidden">
              <div className="flex items-center space-x-2">
                <BookIcon className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-800">Epigenômica Humana</h1>
              </div>
          </header>
          {selectedChapter ? (
            <ChapterView chapter={selectedChapter} />
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>Selecione um capítulo para começar.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
