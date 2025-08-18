import { useState, useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';

const functionsData = [
  {
    id: 1,
    title: "Biblioteca Jurídica",
    description: "Milhares de livros e materiais organizados",
    icon: "📚"
  },
  {
    id: 2,
    title: "Resumo",
    description: "Resumos dos principais temas jurídicos",
    icon: "📝"
  },
  {
    id: 3,
    title: "Assistente IA",
    description: "Inteligência artificial especializada",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Video Aulas",
    description: "Conteúdo em vídeo com professores especializados",
    icon: "🎥"
  }
];

export const FunctionCarousel = () => {
  const { setCurrentFunction } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para navegar para a função selecionada
  const handleFunctionClick = (functionTitle: string) => {
    setCurrentFunction(functionTitle);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        return prevIndex >= functionsData.length - 1 ? 0 : prevIndex + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-store-primary/5 to-premium-primary/5 shadow-lg sm:shadow-2xl border">
      {/* Título do Carrossel */}
      <div className="text-center py-3 sm:py-4 md:py-6 bg-gradient-to-r from-store-primary/10 to-premium-primary/10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-legal mb-1 sm:mb-2">⚡ Funções em Alta</h2>
        <p className="text-xs sm:text-sm text-muted-foreground px-2 sm:px-4">Acesse rapidamente suas ferramentas favoritas</p>
      </div>
      
      {/* Carrossel de Funções */}
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-72 xl:h-80 overflow-hidden group">
        {/* Botões de navegação */}
        <button 
          onClick={() => setCurrentIndex(prev => prev === 0 ? functionsData.length - 1 : prev - 1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setCurrentIndex(prev => prev === functionsData.length - 1 ? 0 : prev + 1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex h-full px-4 sm:px-6 gap-4 sm:gap-6">
          {functionsData.map((func, index) => (
            <div 
              key={func.id}
              className={`flex-shrink-0 transition-all duration-1000 ease-in-out cursor-pointer ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${100 / functionsData.length}%`,
                minWidth: '140px',
                maxWidth: '180px'
              }}
              onClick={() => handleFunctionClick(func.title)}
            >
              <div className="relative group h-full w-full max-w-[160px] mx-auto">
                {/* Capa amarela com ícone */}
                <div 
                  className="w-full h-full rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex flex-col items-center justify-center text-white"
                  style={{ aspectRatio: '3/4', backgroundColor: '#F5C842' }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">
                    {func.icon}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-center px-2 leading-tight">
                    {func.title}
                  </h3>
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                      <span className="text-xs sm:text-sm font-bold">Acessar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center py-3 sm:py-4 space-x-1 sm:space-x-2">
        {functionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'shadow-lg scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            style={index === currentIndex ? { backgroundColor: '#F5C842' } : {}}
          />
        ))}
      </div>
    </div>
  );
};