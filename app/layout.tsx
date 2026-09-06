import type { Metadata } from 'next';
import './globals.css';
import { business } from '@/lib/business';
export const metadata: Metadata = {metadataBase:new URL(business.website),title:'Jai Bhavani Plywood & Hardware | Plywood Supplier in Badangpet',description:'Looking for plywood and hardware in Badangpet? Contact Jai Bhavani Plywood & Hardware in Libra Enclave to enquire about products, availability and directions.',openGraph:{title:'Jai Bhavani Plywood & Hardware',description:'Your local plywood supplier in Badangpet. Enquire about materials, opening hours and directions.',type:'website'},robots:{index:false,follow:false},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-IN"><body>{children}</body></html>}
