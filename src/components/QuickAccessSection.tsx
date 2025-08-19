import { Bot, Scale, Monitor, Headphones, Pencil } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
export const QuickAccessSection = () => {
  const {
    setCurrentFunction
  } = useNavigation();
  const {
    isTablet
  } = useDeviceDetection();
  const quickItems = [{
    id: 1,
    title: 'Vade Mecum',
    active: true,
    icon: Scale,
    functionName: 'Vade Mecum Digital'
  }, {
    id: 2,
    title: 'Assistente IA',
    active: true,
    icon: Bot,
    functionName: 'Assistente IA'
  }, {
    id: 3,
    title: 'Plataforma Desktop',
    active: true,
    icon: Monitor,
    functionName: 'Plataforma Desktop'
  }, {
    id: 4,
    title: 'Áudio-aulas',
    active: true,
    icon: Headphones,
    functionName: 'Áudio-aulas'
  }, {
    id: 5,
    title: 'Questões Comentadas',
    active: true,
    icon: Pencil,
    functionName: 'Questões Comentadas'
  }];
  const handleItemClick = (item: typeof quickItems[0]) => {
    if (item.active) {
      setCurrentFunction(item.functionName);
    }
  };
  return <div className={`bg-card/90 backdrop-blur-sm rounded-xl ${isTablet ? 'p-3 mx-2 mb-4' : 'p-4 sm:p-6 mx-3 sm:mx-4 mb-6'} border border-border/50 text-center shadow-lg glass-effect-modern`}>
      {/* Título */}
      <h2 className={`${isTablet ? 'text-sm' : 'text-base sm:text-lg'} font-semibold text-foreground ${isTablet ? 'mb-3' : 'mb-4'}`}>Acesso Rápido</h2>
      
      {/* Grid responsivo de itens */}
      <div className={`flex justify-center items-center ${isTablet ? 'gap-3' : 'gap-4 sm:gap-6'} mt-4`}>
        {quickItems.slice(0, 5).map((item, index) => <div key={item.id} onClick={() => handleItemClick(item)} style={{
        animationDelay: `${index * 100}ms`
      }} className="group cursor-pointer transition-all duration-300 hover:scale-105 mx-[2px]">
            {/* Círculo responsivo com ícone */}
            <div className={`${isTablet ? 'w-10 h-10 mb-1' : 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2'} mx-auto rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary/90 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/40`}>
              <item.icon className={`${isTablet ? 'w-5 h-5' : 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7'} text-black icon-hover-bounce`} />
            </div>
            
            {/* Texto responsivo abaixo */}
            <p className={`${isTablet ? 'text-xs max-w-12' : 'text-xs sm:text-xs lg:text-sm max-w-14 sm:max-w-16 lg:max-w-20'} font-medium mx-auto leading-tight transition-colors duration-300 text-foreground group-hover:text-primary text-center`}>
              {item.title}
            </p>
          </div>)}
      </div>
    </div>;
};