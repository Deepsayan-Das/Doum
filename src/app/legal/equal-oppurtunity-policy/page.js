import Navbar2 from '@/app/components/Navbar2';
import React from 'react';

function EqualOpportunityPolicy() {
  return (
    <>
      {/* Navbar */}
      <div className=' w-full ml-[20vw] md:ml-[20vw]'><Navbar2/></div>
      
      {/* Policy Document */}
      <div className="bg-white text-[#18375d] p-6 md:p-12 w-full md:w-4/5 max-w-6xl mx-auto px-4 md:px-12 font-glacial mt-[5vh] md:mt-[10vh] rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">EQUAL OPPORTUNITY POLICY</h1>
        <p className="text-gray-700 text-center">Date of Issue: 18th February 2025</p>
        <p className="text-gray-700 text-center">Effective From: 18th February 2025</p>
        <p className="text-gray-700 text-center">Authorized By: Board of Directors of DOUM</p>
        <p className="text-gray-700 text-center">Adopted By: Board Resolution dated 18th February 2025</p>

        {/** Sections **/}
        {[ 
          { title: '1. SCOPE', content: 'This Equal Opportunity Policy ("Policy") applies to all job applicants, employees, and employers at DOUM. Any Transgender Person or Person with Disability employed at DOUM is encouraged to communicate their specific concerns or requirements to the Human Resources (HR) department or Liaison and Complaint Officer to ensure necessary accommodations are provided.' },
          { title: '2. DEFINITIONS', content: (
            <>
              <p><strong>2.1 Discrimination:</strong> Any exclusion, distinction, or restriction based on gender, sexual orientation, disability, or any other characteristic that impairs equal rights and opportunities in any professional setting, including denial of reasonable accommodations.</p>
              <p><strong>2.2 Person with Disability:</strong> An individual with a long-term physical, mental, intellectual, or sensory impairment that hinders their full participation in society.</p>
              <p><strong>2.3 Reasonable Accommodation:</strong> Necessary and appropriate modifications and adjustments to ensure equal opportunities without imposing an undue burden on DOUM.</p>
              <p><strong>2.4 Transgender Person:</strong> An individual whose gender identity does not match their assigned gender at birth, including trans-men, trans-women, persons with intersex variations, genderqueer individuals, and others with socio-cultural identities.</p>
            </>
          ) },
          { title: '3. OBJECTIVE OF THE POLICY', content: 'DOUM is committed to fostering a workplace that respects diversity and core values. As an equal opportunity employer, DOUM ensures that recruitment, career advancement, and workplace policies are free from bias or discrimination. DOUM values its people and promotes an inclusive environment where all employees are treated with respect and dignity. The company does not tolerate discrimination, harassment, or unfair treatment based on origin, nationality, religion, race, gender, age, disability, or sexual orientation. Employees who feel that their workplace does not align with these principles are encouraged to report concerns to the HR department.' },
          { title: '4. RULES & REGULATIONS', content: (
            <ul className="list-disc pl-6">
              <li>DOUM provides equal employment opportunities regardless of age, gender, race, religion, disability, nationality, or sexual orientation.</li>
              <li>Employees are responsible for treating each other with respect and dignity, fostering a work environment free from discrimination.</li>
              <li>Employment decisions at DOUM are merit-based, ensuring opportunities for career growth and development are determined by performance, ability, and business needs.</li>
              <li>Harassment, discrimination, bullying, or victimization of any kind is strictly prohibited, and any violations will result in disciplinary action, including termination if necessary.</li>
              <li>Employees who experience discrimination, harassment, or bullying can report their concerns to the HR department. All complaints will be handled with confidentiality and fairness.</li>
              <li>DOUM ensures compliance with The Transgender Persons (Protection of Rights) Act, 2019 and The Rights of Persons with Disabilities Act, 2016.</li>
              <li>DOUM provides reasonable accommodations and necessary facilities to enable employees with disabilities or transgender persons to perform their duties effectively.</li>
              <li>The company ensures that no employment opportunity is denied based on gender identity or disability.</li>
            </ul>
          ) },
          { title: '5. SELECTION & RECRUITMENT', content: 'DOUM follows a fair, transparent, and merit-based recruitment process without discrimination against Transgender Persons or Persons with Disabilities. All job postings include a statement reinforcing DOUM’s commitment to equal opportunities. Selection criteria focus solely on job-related skills and qualifications, ensuring that they do not impose indirect discrimination. Application forms and hiring processes accommodate individuals with disabilities, ensuring accessibility.' },
          { title: '6. WORKPLACE FACILITIES & ACCOMMODATIONS', content: (
            <ul className="list-disc pl-6">
              <li>DOUM provides necessary infrastructure and accommodations for Transgender Persons and Persons with Disabilities, including accessibility standards for offices and facilities.</li>
              <li>Gender-neutral restrooms where feasible.</li>
              <li>Workstation adjustments to meet individual needs.</li>
              <li>Employees can request reasonable accommodations through HR or the Liaison and Complaint Officer, and DOUM ensures such requests are addressed on a case-by-case basis.</li>
              <li>No employee is required to bear the costs of workplace accommodations.</li>
            </ul>
          ) },
          { title: '7. EMPLOYEE RESPONSIBILITIES', content: 'Employees must comply with this Policy and all applicable laws. Managers are responsible for maintaining an inclusive and discrimination-free work environment. Employees should report any concerns related to discrimination or harassment to HR or the designated officer.' },
          { title: '8. HR DEPARTMENT RESPONSIBILITIES', content: 'HR is responsible for addressing grievances related to discrimination and ensuring compliance with this Policy. HR will conduct periodic evaluations of workplace inclusivity and recommend improvements where necessary.' },
          { title: '9. CONFIDENTIALITY', content: 'All personal information shared concerning gender identity or disabilities will remain confidential and used strictly for workplace inclusion efforts.' },
          { title: '10. MAINTENANCE OF RECORDS', content: 'DOUM will maintain records on the number of Transgender Persons and Persons with Disabilities employed, workplace accommodations provided, and reports of discrimination and actions taken.' },
          { title: '11. GRIEVANCE REDRESSAL', content: 'Any complaints regarding discrimination, harassment, or lack of reasonable accommodation should be reported to the Liaison and Complaint Officer or HR. All complaints will be investigated within 15 days, with appropriate actions taken within 15 days of the inquiry report submission. Strict confidentiality will be maintained throughout the grievance process.' },
          { title: '12. POLICY MODIFICATIONS', content: 'DOUM reserves the right to modify this Policy as necessary to remain compliant with laws and best practices.' },
        ].map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <div className="break-words text-gray-700">{section.content}</div>
          </section>
        ))}

<p className="text-gray-700 mt-6">For any concerns or guidance regarding this Policy, employees may email at info@doum.in.</p>
<br/>
<p className="text-gray-700">DOUM is committed to creating a workplace where everyone is treated with dignity and has equal opportunities to thrive.</p>
      </div>
    </>
  );
}

export default EqualOpportunityPolicy;
