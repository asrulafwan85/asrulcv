export default function Page() {
  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(180deg,#0f172a,#1e293b)',color:'white',fontFamily:'Arial',padding:'40px'}}>
      <div style={{maxWidth:'1000px',margin:'0 auto'}}>
        <h1 style={{fontSize:'48px',marginBottom:'8px'}}>ASRUL AFWAN BIN ABDULLAH</h1>
        <p style={{fontSize:'20px',color:'#cbd5e1'}}>Quality Assurance / Quality Control Engineer</p>
        <p style={{color:'#94a3b8'}}>Sungai Petani, Kedah • asrulafwan@gmail.com • +6019-4259878</p>

        <section style={{marginTop:'30px',background:'#ffffff10',padding:'24px',borderRadius:'16px'}}>
          <h2>Professional Summary</h2>
          <p>Results-driven Quality Assurance Engineer with over 15 years of experience in manufacturing quality systems, product inspection, compliance, and process improvement. Certified Lean Six Sigma Green Belt with strong expertise in ISO standards, audits, CAPA, RCA and SOP development.</p>
        </section>

        <section style={{marginTop:'24px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
          <div style={{background:'#ffffff10',padding:'20px',borderRadius:'16px'}}><h3>Experience</h3><p>15+ Years</p></div>
          <div style={{background:'#ffffff10',padding:'20px',borderRadius:'16px'}}><h3>Standards</h3><p>ISO 9001 / 14001 / 45001</p></div>
          <div style={{background:'#ffffff10',padding:'20px',borderRadius:'16px'}}><h3>Focus</h3><p>Audits • CAPA • RCA</p></div>
        </section>

        <section style={{marginTop:'24px',background:'#ffffff10',padding:'24px',borderRadius:'16px'}}>
          <h2>Core Competencies</h2>
          <p>Quality Control, Incoming/In-Process/Final Inspection, Internal & External Auditing, NCR Management, CAPA, RCA, SOP Development, HIRADC, Team Leadership, Customer Liaison, SAP, Excel.</p>
        </section>

        <section style={{marginTop:'24px',background:'#ffffff10',padding:'24px',borderRadius:'16px'}}>
          <h2>Professional Experience</h2>
          <h3>Leader Cable Industry Berhad (2010 - Present)</h3>
          <ul>
            <li>Developed QA policies, procedures and SOPs aligned with ISO standards.</li>
            <li>Conducted incoming, in-process and final inspections.</li>
            <li>Led internal audits and managed NCRs.</li>
            <li>Performed RCA and drove CAPA improvements.</li>
            <li>Supervised QA personnel and trained teams.</li>
            <li>Handled customer quality complaints and follow-up actions.</li>
          </ul>
          <h3>Fuji Electric (2009)</h3>
          <p>Trainee Engineer – Assisted maintenance of AHU, chillers and compressors.</p>
          <h3>DXN Industries (2008)</h3>
          <p>Practical Trainee – Reporting, database tracking and production support.</p>
        </section>

        <section style={{marginTop:'24px',background:'#ffffff10',padding:'24px',borderRadius:'16px'}}>
          <h2>Certifications</h2>
          <p>Lean Six Sigma Green Belt (2026), Team Building Leadership, HIRADC Workshop, Excel Intermediate, NIOSH Incident Reporting, RCA Tools, ISO Awareness, Internal Auditing.</p>
        </section>

        <section style={{marginTop:'24px',background:'#ffffff10',padding:'24px',borderRadius:'16px'}}>
          <h2>Education</h2>
          <p>Bachelor of Electrical (Electronic) Engineering - Universiti Malaysia Pahang</p>
          <p>Matriculation - Kedah Matriculation College</p>
          <p>SPM - SMS Sultan Mohammad Jiwa</p>
        </section>
      </div>
    </main>
  )
}
