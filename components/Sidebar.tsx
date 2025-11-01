
import React from 'react';
import type { ChapterData } from '../types';
import { BookIcon } from './icons';

interface SidebarProps {
  chapters: ChapterData[];
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, selectedChapterId, onSelectChapter }) => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 lg:w-72 xl:w-80 bg-white border-r border-gray-200 p-6 flex-col hidden md:flex">
      <div className="flex items-center space-x-3 mb-8">
        <BookIcon className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Epigenômica Humana</h1>
      </div>
      <nav className="flex-1 overflow-y-auto pr-2 -mr-2">
        <ul>
          {chapters.map(chapter => (
            <li key={chapter.id} className="mb-1">
              <button
                onClick={() => onSelectChapter(chapter.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-start space-x-3 ${
                  selectedChapterId === chapter.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-md text-sm flex items-center justify-center mt-0.5 ${
                  selectedChapterId === chapter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
                }`}>
                  {chapter.id}
                </span>
                <span>{chapter.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
       <footer className="mt-6 text-xs text-gray-400">
        <p>Baseado em "Human Epigenomics" por C. Carlberg & F. Molnár.</p>
      </footer>
    </aside>
  );
};
