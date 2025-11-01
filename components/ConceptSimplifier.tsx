
import React, { useState } from 'react';
import { SparkleIcon, LightBulbIcon } from './icons';

interface ConceptSimplifierProps {
  text: string;
  simplifiedText: string;
}

export const ConceptSimplifier: React.FC<ConceptSimplifierProps> = ({ text, simplifiedText }) => {
  const [isSimplified, setIsSimplified] = useState(false);

  return (
    <div className="my-6 p-6 rounded-2xl bg-gray-50 border border-gray-200 relative">
      <div className="absolute -top-3 right-4">
        <button
          onClick={() => setIsSimplified(!isSimplified)}
          className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all shadow-sm hover:shadow-md"
          title="Simplificar conceito com IA"
        >
          <SparkleIcon className="h-5 w-5 text-purple-500" />
          <span>{isSimplified ? 'Ver Original' : 'Simplificar'}</span>
        </button>
      </div>

      <div className="flex items-start space-x-4 mt-4">
         <div className="flex-shrink-0 mt-1">
            <LightBulbIcon className="h-6 w-6 text-yellow-500" />
         </div>
         <div>
            <p className="font-semibold text-gray-800 mb-2">Conceito-chave</p>
            <p className={`transition-opacity duration-300 ${isSimplified ? 'opacity-50' : 'opacity-100'}`}>
                {text}
            </p>
            {isSimplified && (
                <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
                    <p className="font-semibold text-purple-800">Em termos simples:</p>
                    <p className="mt-1 text-purple-900">{simplifiedText}</p>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};
