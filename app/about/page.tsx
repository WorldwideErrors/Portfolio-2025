import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Me'
};

export default function Page() {
  return <AboutClient />;
}