import { Metadata } from 'next';
import LegalClient from './LegalClient';

export const metadata: Metadata = {
  title: 'Aviso Legal y Términos de Servicio | Humanis',
  description: 'Términos y condiciones del servicio de colocación de personal Humanis. Aviso de privacidad, política de cookies y marco legal de operación.',
  keywords: [
    'términos y condiciones humanis',
    'aviso de privacidad agencia',
    'política cookies',
    'términos servicio colocación'
  ],
  alternates: {
    canonical: 'https://www.humanis.com.mx/legal'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LegalPage() {
  return <LegalClient />;
}
