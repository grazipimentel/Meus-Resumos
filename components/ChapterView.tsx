
import React from 'react';
import type { ChapterData } from '../types';
import { SparkleIcon } from './icons';
import { ConceptSimplifier } from './ConceptSimplifier';

interface ChapterViewProps {
  chapter: ChapterData;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <header className="mb-12">
        <p className="text-base font-semibold text-blue-600">Capítulo {chapter.id}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{chapter.title}</h1>
      </header>
      
      {chapter.summary && (
        <section className="mb-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center group">
            Resumo
            <span 
                className="ml-2 relative"
                title="Resumo gerado por IA com base no conteúdo do capítulo"
            >
                <SparkleIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-600 transition" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{chapter.summary}</p>
        </section>
      )}

      {chapter.content.length > 0 ? (
        <article className="prose prose-lg lg:prose-xl max-w-none prose-blue">
          {chapter.content.map((item, index) => {
            switch (item.type) {
              case 'paragraph':
                return <p key={index}>{item.text}</p>;
              case 'concept':
                return <ConceptSimplifier key={index} text={item.text} simplifiedText={item.simplified} />;
              case 'figure':
                const randomSeed = item.id.split('.').reduce((acc, val) => acc + parseInt(val, 10), 0);
                return (
                  <figure key={index} className="my-10">
                    <div className="bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                         <img 
                            src={`https://picsum.photos/seed/${chapter.id * 100 + randomSeed}/800/500`} 
                            alt={item.caption}
                            className="w-full h-auto"
                        />
                    </div>
                    <figcaption className="text-center mt-3 text-base text-gray-600">{item.caption}</figcaption>
                  </figure>
                );
              default:
                return null;
            }
          })}
        </article>
      ) : (
        <div className="text-center py-12 text-gray-500 bg-gray-100 rounded-lg">
            <p>Conteúdo para este capítulo estará disponível em breve.</p>
        </div>
      )}
    </div>
  );
};
