import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const ArtigosComentados = () => {
  const {
    functions,
    loading,
    error
  } = useAppFunctions();
  const {
    setCurrentFunction
  } = useNavigation();
  const {
    isTablet
  } = useDeviceDetection();

  // Busca especificamente a função "Artigos Comentados" na tabela APP
  const artigosComentados = functions.find(func => func.funcao.toLowerCase().includes('artigos comentados') || func.funcao.toLowerCase().includes('artigo comentado'));
  const handleAccessClick = () => {
    if (artigosComentados) {
      setCurrentFunction(artigosComentados.funcao);
    }
  };
  if (loading) {
    return <section className={`${isTablet ? 'px-2 mb-4' : 'px-3 sm:px-4 md:px-8 mb-6 sm:mb-8'}`}>
        <div className={`${isTablet ? 'max-w-4xl' : 'max-w-7xl'} mx-auto`}>
          <div className="bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 p-6 animate-pulse">
            <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </section>;
  }
  if (error || !artigosComentados) {
    return null;
  }
  return <section className={`${isTablet ? 'px-2 mb-4' : 'px-3 sm:px-4 md:px-8 mb-6 sm:mb-8'}`}>
      <div className={`${isTablet ? 'max-w-4xl' : 'max-w-7xl'} mx-auto`}>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-border/50 p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-1">
                {artigosComentados.funcao}
              </h2>
              <p className="text-muted-foreground text-sm">
                {artigosComentados.descricao}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAccessClick} className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Acessar Artigos
            </Button>
            
            {artigosComentados.link && <Button variant="outline" asChild className="flex items-center gap-2">
                
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};