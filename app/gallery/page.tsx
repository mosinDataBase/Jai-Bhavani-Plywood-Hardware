import {Shell} from '@/components/site';
import {GalleryGrid} from '@/components/sections';
export const metadata={title:'Gallery | Jai Bhavani Plywood & Hardware',description:'Explore illustrative plywood, furniture hardware and material photography. Business photographs are awaiting owner approval.'};
export default function Page(){return <Shell><section className="wrap page-intro"><div className="eyebrow">MATERIALS IN FOCUS</div><h1>A Closer Look</h1><p>This demo uses licensed stock photographs. They illustrate material categories and do not show the actual store, staff or confirmed inventory.</p></section><section className="wrap section gallery-page"><GalleryGrid/></section></Shell>}
