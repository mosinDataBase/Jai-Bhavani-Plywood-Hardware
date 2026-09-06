import {Shell} from '@/components/site';
import {FAQAccordion} from '@/components/sections';
import {faqs} from '@/lib/business';
export const metadata={title:'Frequently Asked Questions | Jai Bhavani',description:'Useful information about material enquiries, visiting the Badangpet store, opening hours and product availability.'};
export default function Page(){return <Shell><section className="wrap page-intro"><div className="eyebrow">PLAN YOUR VISIT</div><h1>Good Questions.<br/>Useful Answers.</h1><p>Find the essentials here. For a specific material or an unconfirmed service, please call the store.</p></section><section className="wrap section faq-page">{['Products','Visiting the Store','Orders & Enquiries','Contractor Requirements'].map(g=><div className="faq-group" key={g}><h2>{g}</h2><FAQAccordion items={faqs.filter(f=>f.group===g)}/></div>)}</section></Shell>}
