export const business = {
 name: 'Jai Bhavani Plywood & Hardware', phone: '+91 99669 62582', tel: '+919966962582',
 address: 'Plot No. 16, Libra Enclave, toward Nadergul Main Road, near Ruchi Restaurants, Badangpet / Dawoodkhanguda, Telangana 500112',
 rating: 4.6, reviewCount: 183, website: 'https://jai-bhavani-materials-demo.mosinzhb32.chatgpt.site',
 mapsEmbedUrl: '', googleProfileUrl: '', whatsapp: '', email: '', enquiryEndpoint: '', demo: true,
 brands: '[Confirm plywood brands]', delivery: '[Confirm delivery availability and service area.]', bulk: '[Confirm contractor and bulk-order policy.]', story: '[Add verified year founded, owner story and business background.]',
 hours: [{days:'Monday–Saturday',time:'8:00 AM–8:00 PM'},{days:'Sunday',time:'8:00 AM–2:00 PM'}]
};
export const directions = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(business.address);
export const photos = [
 {src:'https://images.pexels.com/photos/7479035/pexels-photo-7479035.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'Stacked plywood panels showing layered edges',category:'Plywood',credit:'cottonbro studio / Pexels',source:'https://www.pexels.com/photo/close-up-shot-of-plywood-7479035/'},
 {src:'https://images.pexels.com/photos/7505566/pexels-photo-7505566.jpeg?auto=compress&cs=tinysrgb&w=1000',alt:'Wood samples arranged on a showroom shelf',category:'Materials',credit:'cottonbro studio / Pexels',source:'https://www.pexels.com/photo/woman-looking-at-wood-samples-on-a-shelf-7505566/'},
 {src:'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=1000',alt:'A furniture hinge being fitted to a wooden panel',category:'Hardware',credit:'Ksenia Chernaya / Pexels',source:'https://www.pexels.com/photo/crop-person-screwing-door-hinge-5691502/'}
];
export const products = [
 {name:'Plywood',image:0,desc:'For furniture, interiors and other wood-based project applications. Contact the store to confirm available grades, sizes, thicknesses and brands.',note:'[Confirm plywood grades, thicknesses and brands.]',use:'Furniture · Cabinetry · Interior projects'},
 {name:'Boards & Panels',image:1,desc:'Sheet materials for furniture and interior applications.',note:'[Confirm MDF, HDF, blockboard and other board categories.]',use:'Furniture · Partitions · Interior applications'},
 {name:'Furniture Hardware',image:2,desc:'Hardware and fittings for furniture and interior work.',note:'[Confirm exact hardware range.]',use:'Furniture fittings · Joinery requirements'},
 {name:'Decorative & Finishing Materials',image:1,desc:'Explore materials for surface finishing and interior applications.',note:'[Confirm laminates, veneers and related products.]',use:'Surface finishes · Furniture detailing'}
];
export const faqs = [
 {group:'Products',q:'What products do you stock?',a:'We are publicly listed as a plywood supplier and our business name includes plywood and hardware. Contact the store to confirm the latest product range, brands, sizes and specifications.'},
 {group:'Orders & Enquiries',q:'Can I check availability before visiting?',a:'Yes. Call +91 99669 62582 with your requirement before travelling, especially when you need a particular size, thickness, grade or quantity.'},
 {group:'Visiting the Store',q:'Where are you located?',a:business.address+'.'},
 {group:'Visiting the Store',q:'What are your opening hours?',a:'The current public schedule is 8 AM–8 PM Monday through Saturday and 8 AM–2 PM Sunday. Holiday hours may vary.'},
 {group:'Orders & Enquiries',q:'Do you provide delivery?',a:business.delivery},
 {group:'Orders & Enquiries',q:'Can I send my requirement through WhatsApp?',a:'[Confirm whether +91 99669 62582 is an official WhatsApp number.]'},
 {group:'Products',q:'Which plywood brands do you stock?',a:business.brands},
 {group:'Contractor Requirements',q:'Do you handle contractor or bulk requirements?',a:business.bulk}
];

