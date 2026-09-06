import {business} from '@/lib/business';
export default function sitemap(){return ['','/products','/about','/gallery','/faq','/contact'].map(path=>({url:business.website+path,changeFrequency:'monthly' as const,priority:path?0.7:1}))}
