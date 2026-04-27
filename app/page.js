export default function Page() {
  const card = { background:'#111827', padding:'24px', borderRadius:'18px' };
  const section = { maxWidth:'1100px', margin:'0 auto', padding:'0 40px 28px' };

  return (
    <main style={{ minHeight:'100vh', background:'#0b1220', color:'white', fontFamily:'Arial, sans-serif' }}>
      <section style={{ ...section, padding:'70px 40px 30px' }}>
        <p style={{ color:'#38bdf8', letterSpacing:'2px' }}>QUALITY • COMPLIANCE • IMPROVEMENT</p>
        <h1 style={{ fontSize:'56px', margin:'10px 0' }}>ASRUL AFWAN BIN ABDULLAH</h1>
        <p style={{ fontSize:'24px', color:'#cbd5e1' }}>Senior QA / QC Engineer</p>
        <p style={{ color:'#94a3b8', maxWidth:'760px' }}>15+ years in manufacturing quality systems, audits, ISO compliance, CAPA, RCA, leadership and continuous improvement.</p>
      </section>

      <section style={section}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'16px' }}>
          <div style={card}><h3>Experience</h3><p>15+ Years</p></div>
          <div style={card}><h3>Standards</h3><p>ISO 9001 / 14001 / 45001</p></div>
          <div style={card}><h3>Focus</h3><p>Audits • CAPA • RCA</p></div>
          <div style={card}><h3>Location</h3><p>Sungai Petani, Kedah</p></div>
        </div>
      </section>

      <section style={section}>
        <div style={card}>
          <h2>Professional Summary</h2>
          <p style={{ color:'#cbd5e1', lineHeight:'1.7' }}>Results-driven Quality Assurance Engineer with proven experience in inspections, compliance, process improvement, audits, team supervision and customer quality management. Lean Six Sigma Green Belt certified.</p>
        </div>
      </section>

      <section style={section}>
        <div style={card}>
          <h2>Experience</h2>
          <h3>Leader Cable Industry Berhad (2010 - Present)</h3>
          <ul>
            <li>Developed QA procedures and SOPs.</li>
            <li>Managed incoming, in-process and final inspections.</li>
            <li>Led audits and NCR actions.</li>
            <li>Performed RCA and CAPA improvements.</li>
            <li>Supervised QA personnel and training.</li>
          </ul>
          <h3>Fuji Electric (2009)</h3>
          <p>Trainee Engineer – AHU, chillers and compressors maintenance support.</p>
          <h3>DXN Industries (2008)</h3>
          <p>Practical Trainee – Reporting, tracking database and production support.</p>
        </div>
      </section>

      <section style={section}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
          <div style={card}>
            <h2>Skills</h2>
            <p>Auditing • CAPA • RCA • SOP • HIRADC • SAP • Excel</p>
          </div>
          <div style={card}>
            <h2>Education</h2>
            <p>Bachelor of Electrical Engineering - UMP</p>
            <p>Matriculation - Kedah</p>
          </div>
        </div>
      </section>
    </main>
  );
}
