import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, Award, Briefcase } from 'lucide-react';

// Ready for Vercel deployment
export default function AsrulResume(){
return (
<div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white p-6 md:p-10'>
<div className='max-w-6xl mx-auto space-y-8'>
<motion.section initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='grid md:grid-cols-3 gap-6 items-center'>
<div className='md:col-span-2 space-y-3'>
<h1 className='text-4xl md:text-6xl font-bold'>ASRUL AFWAN BIN ABDULLAH</h1>
<p className='text-xl text-slate-300'>Quality Assurance / Quality Control Engineer</p>
<p className='text-slate-400 max-w-2xl'>15+ years in manufacturing quality systems, audits, ISO compliance, CAPA, process improvement and team leadership. IASSC Certified Lean Six Sigma Green Belt.</p>
<div className='flex flex-wrap gap-3 pt-2'><Button className='rounded-2xl'><Download className='w-4 h-4 mr-2'/>Download CV</Button></div>
</div>
<Card className='bg-white/10 border-white/10 text-white rounded-2xl'><CardContent className='p-5 space-y-3'>
<div className='flex gap-2'><MapPin className='w-4 h-4'/>Sungai Petani, Kedah</div>
<div className='flex gap-2'><Phone className='w-4 h-4'/>+6019-425 9878</div>
<div className='flex gap-2'><Mail className='w-4 h-4'/>asrulafwan@gmail.com</div>
</CardContent></Card>
</motion.section>

<section className='grid md:grid-cols-3 gap-6'>
<div className='md:col-span-2 space-y-6'>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6'><h2 className='text-2xl font-semibold flex gap-2 mb-4'><Briefcase/>Experience</h2><div className='space-y-5'>
<div><h3 className='font-bold text-lg'>Leader Cable Industry Berhad</h3><p className='text-slate-400'>Quality Assurance Engineer • Jul 2010 – Present</p><p className='text-slate-300 mt-2'>Led QA systems, audits, inspections, customer complaints, training, NCR management and continuous improvement initiatives.</p></div>
<div><h3 className='font-bold text-lg'>Fuji Electric (M) Sdn Bhd</h3><p className='text-slate-400'>Trainee Engineer • 2009</p></div>
<div><h3 className='font-bold text-lg'>DXN Industries (M) Sdn Bhd</h3><p className='text-slate-400'>Practical Trainee • 2008</p></div>
</div></CardContent></Card>
</div>
<div className='space-y-6'>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6'><h2 className='text-2xl font-semibold mb-4'>Skills</h2><div className='space-y-3 text-sm'>
<div><p>ISO Compliance</p><div className='h-2 bg-white/10 rounded-full'><div className='h-2 w-full bg-white rounded-full'/></div></div>
<div><p>Internal Auditing</p><div className='h-2 bg-white/10 rounded-full'><div className='h-2 w-11/12 bg-white rounded-full'/></div></div>
<div><p>CAPA / RCA</p><div className='h-2 bg-white/10 rounded-full'><div className='h-2 w-10/12 bg-white rounded-full'/></div></div>
<div><p>Excel / SAP</p><div className='h-2 bg-white/10 rounded-full'><div className='h-2 w-9/12 bg-white rounded-full'/></div></div>
</div></CardContent></Card>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6'><h2 className='text-2xl font-semibold flex gap-2 mb-4'><Award/>Certifications</h2><ul className='space-y-2 text-sm text-slate-300'><li>IASSC Lean Six Sigma Green Belt</li><li>HIRADC Workshop</li><li>MS Excel Intermediate</li><li>Root Cause Analysis</li></ul></CardContent></Card>
</div>
</section>
<section className='grid md:grid-cols-3 gap-6'>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white md:col-span-2'><CardContent className='p-6'><h2 className='text-2xl font-semibold mb-6'>Career Timeline</h2><div className='space-y-4 text-slate-300'><div>2010 - Present • Leader Cable Industry Berhad</div><div>2009 • Fuji Electric (M) Sdn Bhd</div><div>2008 • DXN Industries (M) Sdn Bhd</div></div></CardContent></Card>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6'><h2 className='text-2xl font-semibold mb-4'>Connect</h2><div className='space-y-3'><Button className='w-full rounded-2xl'>LinkedIn</Button><Button className='w-full rounded-2xl'>WhatsApp</Button></div></CardContent></Card>
</section>
<section className='grid md:grid-cols-4 gap-6'>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6 text-center'><div className='text-4xl font-bold'>15+</div><div className='text-slate-400 text-sm'>Years Experience</div></CardContent></Card>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6 text-center'><div className='text-4xl font-bold'>3</div><div className='text-slate-400 text-sm'>Major Companies</div></CardContent></Card>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6 text-center'><div className='text-4xl font-bold'>10+</div><div className='text-slate-400 text-sm'>Certifications</div></CardContent></Card>
<Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6 text-center'><div className='text-4xl font-bold'>ISO</div><div className='text-slate-400 text-sm'>9001 / 14001 / 45001</div></CardContent></Card>
</section>
<section className='mt-6'><Card className='bg-white/10 border-white/10 rounded-2xl text-white'><CardContent className='p-6'><h2 className='text-2xl font-semibold mb-4'>Why Hire Me</h2><p className='text-slate-300'>Proven track record in quality assurance, audits, compliance, customer handling, and manufacturing process improvement. Strong leadership mindset with hands-on technical execution.</p></CardContent></Card></section>
</div>
</div>
)}
