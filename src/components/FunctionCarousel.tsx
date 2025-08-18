import { useState, useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';
const functionsData = [{
  id: 1,
  title: "Biblioteca Jurídica",
  description: "Milhares de livros e materiais organizados",
  icon: "📚"
}, {
  id: 2,
  title: "Resumo",
  description: "Resumos dos principais temas jurídicos",
  icon: "📝"
}, {
  id: 3,
  title: "Assistente IA",
  description: "Inteligência artificial especializada",
  icon: "🤖"
}, {
  id: 4,
  title: "Video Aulas",
  description: "Conteúdo em vídeo com professores especializados",
  icon: "🎥"
}];
export const FunctionCarousel = () => {
  const {
    setCurrentFunction
  } = useNavigation();
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
  return <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl shadow-2xl border border-border/30 hover:shadow-primary/10 transition-all duration-500">
      {/* Carrossel de Funções Melhorado */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
        {/* Botões de navegação */}
        <button 
          onClick={() => setCurrentIndex(prev => prev === 0 ? functionsData.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary/20 backdrop-blur-sm hover:bg-primary/30 text-primary rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-primary/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setCurrentIndex(prev => prev === functionsData.length - 1 ? 0 : prev + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary/20 backdrop-blur-sm hover:bg-primary/30 text-primary rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-primary/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards de funções */}
        <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {functionsData.map((func, index) => (
            <div 
              key={func.id} 
              className="flex-shrink-0 w-full h-full p-6 flex items-center justify-center cursor-pointer"
              onClick={() => handleFunctionClick(func.title)}
            >
              <div className="text-center max-w-md mx-auto group-hover:scale-105 transition-all duration-500">
                <div className="text-6xl mb-4 animate-float-gentle">
                  {func.icon}
                </div>
                <h3 className="text-2xl font-bold gradient-text-legal mb-3">
                  {func.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {func.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores melhorados */}
      <div className="flex justify-center py-6 space-x-3">
        {functionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary shadow-lg shadow-primary/50 scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>;
};