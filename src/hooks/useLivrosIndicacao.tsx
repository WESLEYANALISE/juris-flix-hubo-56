import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface LivroIndicacao {
  id: number;
  capa: string; // URL da capa do livro
  titulo?: string;
  autor?: string;
  descricao?: string;
}

export const useLivrosIndicacao = () => {
  return useQuery({
    queryKey: ['livros-indicacao'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('LIVROS-INDICACAO')
        .select('*');

      if (error) {
        console.error('Erro ao buscar livros indicação:', error);
        throw error;
      }

      return data as LivroIndicacao[];
    },
  });
};