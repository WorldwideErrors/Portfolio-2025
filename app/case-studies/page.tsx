import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies'
};

export default function Page() {
  return <CaseStudiesClient />;
}