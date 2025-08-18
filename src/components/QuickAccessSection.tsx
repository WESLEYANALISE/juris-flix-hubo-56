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
  return <div className={`bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl rounded-2xl ${isTablet ? 'p-4 mx-2 mb-6' : 'p-6 sm:p-8 mx-3 sm:mx-4 mb-8'} border border-border/30 text-center shadow-2xl glass-effect-modern hover:shadow-primary/10 transition-all duration-500`}>
      {/* Título melhorado */}
      <div className="text-center mb-6">
        <h2 className={`${isTablet ? 'text-lg' : 'text-xl sm:text-2xl'} font-bold gradient-text-legal mb-2`}>Acesso Rápido</h2>
        <p className={`${isTablet ? 'text-xs' : 'text-sm'} text-muted-foreground`}>Suas ferramentas favoritas em um clique</p>
      </div>
      
      {/* Grid responsivo melhorado */}
      <div className={`flex justify-center items-center ${isTablet ? 'gap-4' : 'gap-6 sm:gap-8'} mt-6`}>
        {quickItems.slice(0, 5).map((item, index) => <div key={item.id} onClick={() => handleItemClick(item)} style={{
        animationDelay: `${index * 100}ms`
      }} className="group cursor-pointer transition-all duration-300 hover:scale-105 mx-[2px]">
            {/* Círculo melhorado com gradiente e animações */}
            <div className={`${isTablet ? 'w-14 h-14 mb-2' : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mb-3'} mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl shadow-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/50 animate-float-gentle`}>
              <item.icon className={`${isTablet ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9'} text-primary-foreground icon-hover-bounce`} />
            </div>
            
            {/* Texto melhorado */}
            <p className={`${isTablet ? 'text-xs max-w-16' : 'text-xs sm:text-sm lg:text-sm max-w-18 sm:max-w-20 lg:max-w-24'} font-semibold mx-auto leading-tight transition-all duration-300 text-foreground group-hover:text-primary text-center`}>
              {item.title}
            </p>
          </div>)}
      </div>
    </div>;
};