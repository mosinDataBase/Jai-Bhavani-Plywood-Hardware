import {business} from '@/lib/business';
export default function robots(){return {rules:{userAgent:'*',disallow:business.demo?'/':undefined,allow:business.demo?undefined:'/'},sitemap:business.website+'/sitemap.xml'}}
