import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useNavigation } from '@/context/NavigationContext';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { WhatsAppSupport } from '@/components/WhatsAppSupport';

export const BibliotecaJuridica = () => {
  const { functions, loading, error } = useAppFunctions();
  const { setCurrentFunction } = useNavigation();

  const handleBack = () => {
    setCurrentFunction(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Carregando biblioteca...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-4">
        <Card className="max-w-md mx-auto mt-8">
          <CardContent className="p-6 text-center">
            <p className="text-destructive">Erro ao carregar: {error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Buscar a função da biblioteca jurídica
  const bibliotecaFunction = functions.find(func => 
    func.funcao.toLowerCase().includes('biblioteca jurídica') || 
    func.funcao.toLowerCase().includes('biblioteca') && func.funcao.toLowerCase().includes('juridica')
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-lg font-semibold gradient-text">Biblioteca Jurídica</h1>
          <div className="w-16" /> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {bibliotecaFunction?.link && bibliotecaFunction.link.trim() !== '' ? (
          // Se existe link, mostra o iframe
          <div className="w-full h-[calc(100vh-80px)]">
            <iframe
              src={bibliotecaFunction.link}
              className="w-full h-full border border-border rounded-lg"
              title="Biblioteca Jurídica"
            />
          </div>
        ) : (
          // Fallback caso não haja link
          <div className="max-w-2xl mx-auto">
            <Card className="card-legal">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Biblioteca Jurídica
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground text-lg">
                  Acervo completo de materiais jurídicos em desenvolvimento.
                </p>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Em breve:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Códigos e Leis Atualizadas</li>
                    <li>• Jurisprudência Comentada</li>
                    <li>• Doutrinas Essenciais</li>
                    <li>• Súmulas e Enunciados</li>
                  </ul>
                </div>

                <button
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Contatar Suporte
                </button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* WhatsApp Support */}
      <WhatsAppSupport />
    </div>
  );
};