import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { QuickAccessSection } from '@/components/QuickAccessSection';
import { ProductCarousel } from '@/components/ProductCarousel';
import { FunctionCarousel } from '@/components/FunctionCarousel';
import { ArtigosComentados } from '@/components/ArtigosComentados';
import { AppFunction } from '@/components/AppFunction';
import { SocialMediaFooter } from '@/components/SocialMediaFooter';
import { MobileLayout } from '@/components/MobileLayout';
import { DesktopLayout } from '@/components/DesktopLayout';
import { TabletLayout } from '@/components/TabletLayout';
import { SuporteTab } from '@/components/SuporteTab';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
const Index = () => {
  const {
    isInFunction
  } = useNavigation();
  const {
    isMobile,
    isTablet,
    isDesktop
  } = useDeviceDetection();

  // If we're in a function, show the function component
  if (isInFunction) {
    return <AppFunction />;
  }

  // Main content for both mobile and desktop with improved spacing
  const mainContent = <>
      {/* Hero Section - Melhorado */}
      <section className={`${isTablet ? 'px-2 mb-6 py-4' : 'px-3 sm:px-4 md:px-8 mb-8 sm:mb-12 py-6'}`}>
        <div className={`${isTablet ? 'max-w-4xl' : 'max-w-7xl'} mx-auto`}>
          <div className={`text-center ${isTablet ? 'mb-6' : 'mb-10'}`}>
            <h1 className={`${isTablet ? 'text-2xl' : 'text-3xl sm:text-4xl md:text-5xl'} font-bold gradient-text-legal mb-4`}>
              Sua Plataforma Jurídica Completa
            </h1>
            <p className={`${isTablet ? 'text-sm' : 'text-base sm:text-lg'} text-muted-foreground max-w-2xl mx-auto`}>
              Estude direito com as melhores ferramentas, conteúdos atualizados e tecnologia de ponta
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Quick Access Section - Melhorado */}
      <QuickAccessSection />

      {/* Artigos Comentados Section - Melhorado */}
      <ArtigosComentados />

      {/* Function Carousel Section - Melhorado */}
      <section className={`${isTablet ? 'px-2 mb-6' : 'px-3 sm:px-4 md:px-8 mb-8 sm:mb-12'}`}>
        <div className={`${isTablet ? 'max-w-4xl' : 'max-w-7xl'} mx-auto`}>
          <div className={`text-center ${isTablet ? 'mb-4' : 'mb-8'}`}>
            <h2 className={`${isTablet ? 'text-xl' : 'text-2xl sm:text-3xl'} font-bold gradient-text-legal mb-2`}>
              Funções em Alta
            </h2>
            <p className={`${isTablet ? 'text-xs' : 'text-sm sm:text-base'} text-muted-foreground`}>
              Descubra as ferramentas mais utilizadas pelos estudantes
            </p>
          </div>
          <FunctionCarousel />
        </div>
      </section>

      {/* Features Grid - Melhorado */}
      <FeaturesGrid />

      {/* Support Section - Melhorado */}
      <SuporteTab />

      {/* Social Media Footer - Melhorado */}
      <SocialMediaFooter />
    </>;

  // Return appropriate layout based on device
  if (isMobile) {
    return <MobileLayout>{mainContent}</MobileLayout>;
  }
  if (isTablet) {
    return <TabletLayout>{mainContent}</TabletLayout>;
  }
  return <DesktopLayout>{mainContent}</DesktopLayout>;
};
export default Index;