"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Lander from "../components/ui/Lander";
import Person from "../components/ui/Person";
import Footer from "../components/ui/Footer";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Page() {
  const { ref: consultantRef, inView: consultantRefInView } = useInView({
    threshold: 0.1, // Fully visible
    rootMargin: "0px 0px 0px 0px",
  });

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  useEffect(() => {
    if (consultantRefInView) {
      setLeft(false);
      setRight(false);
    } else {
      setLeft(true);
      setRight(true);
    }
  }, [consultantRefInView]);
  return (
    <>
      <Navbar left={left} right={right} />
      <div ref={consultantRef}>
        <Lander
          image="/banner/team.png"
          heading1={"Minds Behind"}
          css="bg-black text-white"
          blurdata="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARCAYAAADKZhx3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEBUlEQVR4nE2VzWsbVxTFJxhkRJyOGStVVFmpiqqqKooTE1VFVUVUUTWq6nxgbIcEhVRF8VLgjapiMCom1BunoSbBG4PBGLwxpE4XKkZFkBq89J8SuvXilt99eqMunmZGb949955z7h3n8uX3xXVdCYVCEol8IBMTExIIBMRxLujinv95LxwOSzQalWTyE7l69UP/fbs8b0o8z5NYLCbh8BW5dOk9CQTG9RoKhXTfdSd1ObxoF5u8ODY2JsFgUINFIhGJx+MKBDjAmUxGg3Mfi01LKvWpBIMXtQDOESuVSv3veWpYWEST59khGwBsJvYg9zZApVKRO3fuyszMjBSLRXn58pW8fv2H9Pt/S7/fl729PUmn03qWc1QLAIvYJAwY+yyeHUOB52dFlhyw1V2/fkOWlpak0fhRksmkJnF+fi6np6dyeHgoOzs78ubNn1IqlbQiEk0kPvbBLM3h8BW98kxchx9ojEan9QAZoq2lhv25uTnJZrPiOI4GHgz68uTJD7KwsCCzs7NSKHyl5wGLxz/SMzxzHh9YGS3NyOKgFRomEgk1DS8a2l29soemrHK5LNvb20rzs2e/yvr6uuRyXyigNSWBAeYcQMQ3ZgsPDeYp3T7VUAAdmcw11RLDUEmtVtNAaPv27T9ycHCgNJ+cnPj0A2J84Sq4pRVACqJy4/ipYYLj4ii64+jiZQABLpW+9oFJiurOzs6k1/tLjo6OZGNjQ6rV7xQUek07eT4g7JHUqIVcPzG6xrHOM21yTTXL579UDdGV7LvdX9TBnU5HKX7+/DdptVqaFImiJ8HxiNFxUvL5vCYFiJ0BAPtzggzZ5FooFDQYzsXNGAnnvnv3r7ZQp/OzzM/PawLLy8uSTn+mumezn6s3zICZ1mq5AmLnged5ug+zai5Mg6vJjpaAPuvy/f19OT4+lt3dXRkMBlo5/by5uSkPHjzU5Or1x+p6EgeE4CRhu8JWGRwmgGw6QHAlWpbL30i1WlUTMQy2trbUSFDa7XblxYvfpdFoSLPZ1GqpdGVlRer1utJKRWb8mkGEdHZMsmcZYamvoDOXyyltmIpKFxcXpdfrSbvdVlDobbd/UkDkAIhz/I8JTY9f8FvFTid7z7Jut2PUwRDQTIYYC4c+elSXZvOprK2tSau1Ivfu3ZdK5VvVHv0Ap02MGW8O28VoaJ1NcDP7A0qvO5yIyKjAWB4a0Pr27YpOI4BxNZoXi7fUPIAhAe8bhtK6bycSLWRbxgKNhsqk/5WiQPYcjAFtZE5Fq6ur6mwmVK32vUoAI/gAD9A+VEjmJDH6wJiKuNqv3Qh83HczdLOnrkYjglMtwATnHg1x7kiKm35/QrkFsB8Eq5/9DpvniwpK5cRAWqj+DzpwDFVAUDWNAAAAAElFTkSuQmCC"
        ></Lander>
      </div>

      <div
        className="w-screen min-h-screen h-fit items-center justify-center flex flex-col bg-white"
        id="more"
      >
        <div className="flex w-full h-fit text-center justify-center my-20">
          <p className="md:text-6xl text-5xl text-center font-black">
            Consultants
          </p>
        </div>

        <div className="w-[70%] h-full grid md:grid-cols-3 grid-cols-2 gap-10 mb-10 ">
          <Person
            name="Aditya Charan"
            image="/team/consultants/cofounder1.jpg"
            position="50% 20%"
            role="Co-Founder"
            theme="dark"
            link="https://www.linkedin.com/in/aditya-chaaran-801434166/"
            des1={`Aditya Charan is a cross-functional consultant with expertise in public-policy advisory, communications design and strategic interventions.

            Aditya has spent his career in working with a diverse set of clients on complex problems which has enabled him to bringing a fresh perspective to the table for clients.

            Leveraging his knowledge of Government policy frameworks and of market and social factors, Aditya has helped clients of all shapes in developing and executing long-term policy-regulatory strategies, conceptualizing sectoral advocacy narratives, designing ecosystem engagement strategies, undertaking crisis interventions etc.`}
            des2="Some of the sectors wherein Aditya has designed and executed interventions for his clients include finance, digital economy, infrastructure, consumer-retail, healthcare, mobility etc."
          />
          <Person
            name="Sarthak Choudhary"
            image="/team/consultants/cofounder2.jpg"
            role="Co-Founder"
            position="50% 5%"
            theme="dark"
            link="https://www.linkedin.com/in/sarthak-choudhary-832760130/"
            des1="Sarthak is a multifaceted communications professional carrying diverse experience of shaping communications and positioning strategies for corporate, social and Government agencies.

Sarthak discovered his calling in communications through a complex non-traditional career that started with Journalism, which has equipped him with insights and nuances of media’s perspective across issues and sectors, enabling him to create a unique synergy between media’s priorities and communication layouts for the clients."
            des2="Sarthak has leveraged his insights in shaping communication strategies and delivering positive conversations for marquee start-ups such as MuscleBlaze, HealthKart, Magneto CleanTech, renowned hospitals like Fortis Hospitals, Motherhood Hospitals, Manipal Hospitals, and leading fertility chain Nova IVF along with Government agencies such as NITI Aayog, Ministry of Health & Family Welfare, Ministry of Agri & Development, Government of Electronics and Information Technology, National Institute of Rural Development and Panchayati Raj"
          />
          <Person
            name="Aishwarya Anup"
            image="/team/consultants/businessStrategy.jpg"
            role="Business Strategy & Operations Lead"
            theme="dark"
            position="50% 30%"
            link="https://www.linkedin.com/in/aishwarya-anup/"
            des1="Aishwarya Anup, currently serving as the Business Strategy & Operations Lead at Ardent Co with over 5 years of experience. With an unwavering commitment to the company‘s success, Aishwarya has been an integral part of the organization since its inception. In her role at Ardent Co., she spearheads the company’s business growth and expansion efforts, overseeing day-to-day operational needs. Aishwarya’s remarkable track record includes successfully onboarding a diverse range of clients, including healthcare, corporate, B2B, healthtech, and government entities."
            des2="With over 5 years of experience in the Sales & Marketing domain, Aishwarya has honed her skills working with renowned digital agency Techmagnate and PR agency named Teamwork, among others.Apart from work,Aishwarya loves to read mythological books and binge-watch OTT content."
          />
          <Person
            name="Tanush Handa"
            image="/team/consultants/assistantManager1.jpg"
            role="Manager, Public Policy"
            theme="dark"
            link="https://www.linkedin.com/in/tanush-handa/"
            position="50% 25%"
            des1="Tanush is working with us as an Assistant Manager - Public Policy at Ardent Co. is a public policy professional with more than 2 years of experience in the realm of policy & politics. As a public policy consultant, his primary role is to provide specialized advice and analysis regarding a broad spectrum of policy matters. He works closely alongside government agencies, non-profit organizations, and various stakeholders to identify and tackle societal challenges effectively. "
            des2="In the past, he has worked closely with the Govt. of Andhra Pradesh among a string of other politico-administrative entities in India on subject matters of development & public welfare, wherein he engaged with a multitude of key stakeholders. Tanush is high on sports and likes his coffee dark and bitter."
          />

          {/* <Person
            name="Sristi Rai"
            image="/team/consultants/seniorAssociate1.jpg"
            role="Senior Associate, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/sristi-rai-b2a900183/"
            position="50% 30%"
            des1="Sristi Rai is working as Senior Public Relation Associate at Ardent Co with 2 years of experience. At Ardent co.,she handles the media relations and communications, along with documents work for the client. Earlier, her career revolved around political, commercial, edtech, healthcare, startups and lifestyle beats. Her expertise lies in strategic communication, media relations, and social skills. Sristi’s hobbies include traveling,music and dancing."
          /> */}
          <Person
            name="Ekta Sharma"
            image="/team/consultants/assistantManager3.jpg"
            role="Manager, Digital Communications"
            theme="dark"
            link="https://www.linkedin.com/in/ekta4sure/"
            position="50% 10%"
            des1="Ekta Sharma is a seasoned professional, skilled in crafting cross-channel branding strategies that deeply resonate with audiences. Her journey artfully blends creativity with strategic prowess, amplifying brand visibility and consistency through dynamic marketing campaigns and media relations. Beyond the boardroom, Ekta is a music maker and an Indian hip-hop culture enthusiast, adding rhythm to both her professional and personal pursuits."
          />

          {/* <Person
            name="Manya Singh"
            image="/team/consultants/seniorAssociate2.jpeg"
            role="Senior Associate, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/manya-singh-1b1789241/"
            position="50% 20%"
            des1="Manya is a PR professional with a bachelor’s degree in psychology from Delhi University. She brings to the table two years of experience across diverse sectors, including legal, healthcare, corporate, and power. Manya specializes in strategic communications, crafting compelling narratives, and building strong media relationships. Manya finds an escape in singing and dancing adding to her multifaceted personality."
          /> */}
          <Person
            name="Manish"
            image="/team/consultants/graphicDesigner.jpeg"
            role="Graphic Designer"
            link="https://www.linkedin.com/in/manish-singh-71726b225/"
            theme="dark"
            position="50% 30%"
            des1="Manish is a prolific and detail-oriented graphic designer with extensive experience across various verticals, including B2B and B2C. He has developed exceptional proficiency in Adobe Creative Suite, excelling in branding, print design, and digital media. Always staying ahead of industry trends, his multifaceted and collaborative approach has earned him a reputation for perfectionism and a keen eye for detail. His work is not only strategically effective but also aesthetically captivating."
            des2="He is a fitness freak always striving to stay active and healthy, with keen interest in stock markets and investments he likes to monitor market trends. In his leisure he enjoys video games"
          />

          <Person
            name="Binaira Vaishno Panwar"
            image="/team/consultants/manager.jpeg"
            role="Manager, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/binaira-vaishno-panwar-a93386119/"
            position="50% 30%"
            des1="Binaira is an experienced communications professional with over four years in the industry. She began her career at Archetype, formerly known as Text100, and subsequently worked with Crosshairs’s, The Yellow Coin, and Jaipur Rugs as a corporate communications assistant manager. Recently, she transitioned to Ardent Co. as a PR manager. Throughout her career, Binaira has handled a diverse range of beats including auto, tech, business, lifestyle, consumer, education, health, social issues, art and culture, and MSME. Outside of work, Binaira enjoys spending time with animals, painting, reading, and cherishing moments at home."
          />
          {/* <Person
            name="Charu Pawar"
            image="/team/consultants/charuPawar.jpg"
            role="Senior Associate, Content and Research"
            theme="dark"
            link="https://www.linkedin.com/in/charu-pawar-203388222/"
            position="50% 10%"
            des1="Charu Pawar is a Senior Associate – Research and Content at Ardent Co., where she develops strategic, insight-led content across sectors like healthcare, real estate, biopharma, public policy, and development. Her work spans industry reports, thought leadership, and behaviour change communication. With a strong grounding in research and narrative craft, Charu helps clients communicate with clarity and impact, tailoring content to diverse audiences across media platforms and stakeholder engagement initiatives."
          /> */}
          <Person
            name="Rushali Kumar"
            image="/team/consultants/hr.jpeg"
            role="Assistant Manager - HR"
            theme="dark"
            link="https://www.linkedin.com/in/rushali-kumar-6135681a2"
            position="50% 10%"
            des1="Rushali is a HR professional currently serving as an Assistant Manager - HR, bringing nearly four years of experience in talent acquisition, employee relations, and workplace process optimization. She has previously sharpened her expertise at Weber Shandwick and HT Media. Outside of work, she enjoys unwinding with her dog and cherishing moments at home."
          />
          <Person
            name="Pramit Lahiri"
            image="/team/consultants/pramit.jpg"
            role="Senior Associate - Research and Content"
            theme="dark"
            link="https://www.linkedin.com/in/pramit-lahiri"
            position="50% 10%"
            des1="Pramit Lahiri is a policy professional with extensive experience working with the Government of India and Members of Parliament. He is currently enhancing his research and content development proficiency at Ardent Co. by consulting its multi-sectoral clients. As a Policy Associate to a Member of Parliament (MP) and a Legislative Advisor to an MP, he has contributed to constitutional federal relations through lawmaking and drafted more than 30 interventions across sectors such as health, climate change, sports, and technology. As a LAMP Fellow with PRS Legislative Research, he was the first one to be assigned to an independent parliamentarian. In that period, he worked on parliamentary interventions, media relations, district projects such as the DISHA Committee."
            des2="His work spans across drafting Op-eds on topics like climate change, AI governance, and climate-smart agriculture, alongside over 60 parliamentary speeches, 200 parliamentary questions addressing education, finance, sports, healthcare, and social welfare among other topics. His strategic media campaigns achieved 23 million views, with 35 initiatives increasing visibility by 60% for his MP. His district-level innovations, including predictive investment models and an AI-integrated dashboard, improved oversight by 50% for his MP as Chairman of the District DISHA Committee. Maintaining robust networks with over 110 global and national stakeholders, including embassies, Central and State ministries, think tanks, and securing CSR partnerships. As a former researcher at the Wildlife Crime Control Bureau of the Government of India, he developed a sophisticated understanding of policy and political dynamics. His contributions at the Bureau, researching international laws and Indian legal framework, contributing to Indian environmental legislation incorporating invasive species for the first time."
          />
          <Person
            name="Debjyoti Samaddar
"
            image="/team/consultants/debjyoti.jpeg"
            role="Junior Associate - Content and Research
"
            theme="dark"
            link="https://www.linkedin.com/in/debjyoti-samaddar-27b285199/"
            position="50% 50%"
            des1="Debjyoti Samaddar is a law and policy professional with interdisciplinary experience across legislative research, regulatory analysis, corporate law, arbitration, and public policy. A graduate of Dr. Ram Manohar Lohiya National Law University, Lucknow, he combines legal research with governance oriented policy analysis, with a growing focus on institutional design, regulatory reform, and public law frameworks."
            des2="His experience spans legislative and policy engagement through internships with the Office of a Member of Parliament, where he contributed to legal and policy research supporting parliamentary functions including Question Hour, Zero Hour interventions, Special Mentions, and policy research. His policy exposure also includes work with the Vidhi Centre for Legal Policy, where he contributed to regulatory and governance reforms across municipal law, corporate regulation, and financial frameworks. This involved proposing reforms to Rajasthan’s municipal governance framework with emphasis on fiscal autonomy, participatory budgeting, and digitization, alongside comparative legal research across global jurisdictions.<br><br>Debjyoti has engaged extensively with technology and regulatory policy, including work within the Compliance Think Tank at Dhir & Dhir Associates in college, contributing to comparative analysis of global AI governance frameworks and assisting in policy recommendations that culminated in the publication AI For Good: India and Beyond. <br><br>In addition to professional engagements, Debjyoti has contributed to academic discourse through publications on environmental governance and public participation in lawmaking. 
<br><br>With a foundation rooted in legal scholarship and practical policy exposure, Debjyoti, as the Junior Associate - Research and Content, continues to develop expertise at the intersection of law, governance, and institutional reform, combining analytical rigour with research-driven policymaking perspectives with Ardent Co."
          />
           <Person
            name="Meghna Juneja"
            image="/team/consultants/meghna.jpeg"
            role="Senior Associate, Public Relations"
            theme="dark"
            link="https://www.linkedin.com/in/meghna-juneja-174a70210/"
            position="50% 50%"
            des1="Meghna Juneja is a communications professional with expertise in strategic media relations, content development, and narrative building. Meghna has worked with a diverse set of clients across sectors, helping shape impactful communication strategies and strengthening brand positioning through targeted outreach. Leveraging her understanding of media landscapes, stakeholder engagement, and policy-linked narratives, she has supported clients in designing thought leadership platforms, executing integrated media campaigns, managing crisis communication, and driving sustained visibility through strategic storytelling and relationship building."
            
          />
        </div>

        <div className="flex w-full h-fit text-center justify-center my-20 ">
          <p className="md:text-6xl text-5xl text-center font-black">
            Advisors
          </p>
        </div>
        <div className="w-[70%] h-full grid md:grid-cols-3 grid-cols-2 gap-10 mb-10">
          {/* <Person
            name="Mr.Jai Prakash"
            image="/team/advisors/7.png"
            position="50% 20%"
            link="https://www.linkedin.com/in/jaip100/"
            role="Advisor, Government Affairs.
Former OSD to Hon’ble Minister of Niti Aayog"
            des1="Mr. Jai Prakash is a multi-faceted public policy professional with an in-depth understanding of federal government processes, and priority development at the intersection of economic, strategic and societal priorities.

Mr. Jai Prakash spent more than six-years working across key Ministries in the Central Government between 2015 to 2021 as the Official on Special Duty to the Hon’ble Minister Rao Inderjit Singh. During his journey as the OSD to the Hon’ble Minister, Mr. Jai Prakash supported the Hon’ble MInister’s engagements across departments including NITI Aayog, Ministry of Defense, Ministry of Housing and Urban Affairs, and Ministry of Chemicals, Pharmaceuticals & Fertilizers etc. 

Mr. Jai Prakash is an MBA from IIM Lucknow, and had a strong career in the private sector sector with various technology companies prior to working with the Government"
            theme="dark"
          /> */}
          <Person
            name="Saptarshi Sanyal"
            image="/team/advisors/10.png"
            position="50% 50%"
            role="Advisor, Media and Communications"
            des1="Aptarshi Sanyal is a journalist and communicator with 26 years of experience with leading brands like NDTV, CNN-IBN, GMR and JSW. He spent a decade in journalism becoming Executive Editor of NDTV Profit before changing tracks. In a 15-year career in communications, policy and government relations, he has worked for leading corporates along with a six-year stint as an independent consultant. He is currently Director of Uncommon Factor Media Pvt Ltd and works in the areas of corporate communication, reputation management, crisis communications and policy. A background in journalism gives him a wide canvas, however, he has deep domain knowledge in aviation, urban transportation, hospitality and automobile sectors. He has worked across the country but professes a weakness for Mumbai and the Eastern states of India."
            theme="dark"
          />
          <Person
            name="Vinod Kumar"
            image="/team/advisors/6.jpg"
            position="50% 20%"
            link="https://www.linkedin.com/in/vkwuthoo/"
            role="Advisor, Strategic Affairs
Deputy Director and Senior Research Fellow, India Foundation"
            des1="Mr. Vinod Kumar is a senior public policy leader and the president of India’s apex industry chamber for the MSME ecosystem, India SME Forum.

As the President of India SME Forum, Mr. Kumar has defined and driven diverse meaningful engagements with Government institutions advocating for the growth and development of small and medium-sized enterprises in India.

His expertise and deep understanding of the industry has invited his participation to a wide-array of high-impact engagements including as a member of the RBI’s Standing Advisory Committee on Flow of Institutional Credit to the MSME sector, as a member of the Ministry of MSMEs, High Powered Monitoring Committee of the National SC/ST Hub of StandUp India and Advisory Committee,demonstrating his expertise and commitment to the development of the MSME sector."
            des2="Among diverse areas, Mr. Vinod Kumar has been contributing significantly to enhancing the capabilities of MSMEs on achieving greater realization from exports, leveraging-technology, regulatory understanding etc."
            theme="dark"
          />
          {/* <Person
            name="Deeksha Goel"
            image="/team/advisors/4.jpg"
            position="50% 20%"
            link="https://www.linkedin.com/in/deeksha-goel-50a10b96/"
            role="Advisor, Strategic Affairs
Deputy Director and Senior Research Fellow, India Foundation"
            des1="Deeksha Goel is a management consultant and policy researcher by training, and has developed a distinguishable record of research and engagements in regional and geopolitical affairs.

Ms. Goel is a Senior Research Fellow and Deputy Director at the India Foundation, wherein Ms. Goel has contributed to a wide-array of informed perspectives and engagements."
            des2="Ms. Goel’s primary focus as a researcher lies in studying the geopolitics of the Indian Ocean Region (IOR) and the impact of development finance on economic sustainability, particularly in IOR countries. With her cross-sectoral experience, Deeksha has worked extensively in various fields including infrastructure, technology, energy security, and food and agriculture sustainability."
            theme="dark"
          /> */}
          <Person
            name="Bhavani Giddu"
            image="/team/advisors/8.jpg"
            position="50% 20%"
            link="https://www.linkedin.com/in/bhavanigiddu"
            role="Advisor, Social Development and Education.
CEO, Footprint Global Communications"
            des1="Bhavani Giddu is a seasoned professional with over 13 years of experience as the CEO of Footprint Global Communications based in New Delhi, India. In this role, she specializes in strategic communications encompassing internal and external branding, crisis communications, issue management, and communications training workshops. Her expertise extends to strategic media advisory, reputation management, and market research. Prior to leading Footprint Global Communications, Bhavani served as the Head of Office and General Manager at IPAN Hill & Knowlton, overseeing operations in Delhi and Kolkata. "
            des2="She also held the position of Manager - Communications at GE Industrial and Senior Consultant & Head of Office at Ogilvy & Mather, where she played a key role in heading offices in Hyderabad, Bangalore, and briefly in New Delhi. Bhavani’s educational background includes attending P.S. Senior Secondary School and completing her studies at the University of Madras."
            theme="dark"
          />
          <Person
            name="Varda Taneja"
            image="/team/advisors/9.jpg"
            position="50% 20%"
            role="Advisor, FDI & Market Entry
Founder, Inara Advisors & FDI Advisor to Sweden India Business Council"
            des1="Varda Taneja is the Founder of a boutique advisory firm, Inara Advisors – focusing on India market entry and regulatory advisory. During her previous role as Vice President, Invest India, Government of India, she led investment promotion in the Europe region and successfully supported European companies in their expansion strategy for India. In addition, she has worked on driving policy initiatives for many companies to support their India investment.

During her decade long experience, Varda has worked in close capacity with the Office of the Prime Minister of India and with senior officials from Federal Ministries and StateGovernments to work on key policy initiatives. She has also led multiple public–private engagements at global platforms and represented India across global platforms such as, World Economic Forum, Davos and others, for policy and business panel discussions."
            des2="Varda is an FDI Advisor with Sweden India Business Council, Swiss Global Enterprise and The Modern India, Norway.

Her passion and efforts have won her the recognition of BusinessWorld Disrupt 30 under 30 and EuropeIndia40 leaders.

Varda holds a Bachelor’s degree in Economics from the University of Delhi, India and a M.Sc. Management & Strategy from the London School of Economics, UK."
            theme="dark"
          />
          {/* <Person
            name="Kazim Rizvi"
            image="/team/advisors/1.jpeg"
            position="50% 20%"
            role="Advisor, Technology Policy. Founding Director, The Dialogue"
            link="https://www.linkedin.com/in/kazim-rizvi-19601217/"
            des1="Kazim Rizvi is a public policy thought-leader in the digital policy space, and has played an influential role in elevating insight-driven discourse across realms of digital technology policy in India.

He is the founding director of The Dialogue think tank, which was established in 2017, and since then has received national and global appreciation for its work, including being recognised as one of the top 10 think-tanks to watch out for by the University of Pennsylvania for two consecutive years (2020 and 2021)."
            des2="At The Dialogue, Kaizen aims to contribute to the creation of a progressive policy ecosystem in India through intellectual discussions and innovative solutions. Kazim is also a prolific writer and has contributed to significant policy discussions including the Digital Personal Data Protection Bill, Competition Regulations for Technology Enterprises, Satellite Internet Communications to name a few."
            theme="dark"
          /> */}
          <Person
            name="Proful Lall"
            image="/team/person.jpg"
            position="50% 50%"
            link="https://www.linkedin.com/in/proful-lall-2896486/"
            role="Advisor, Corporate Affairs"
            des1="Proful Lall is a Corporate Affairs and public affairs specialist with over 20 years of experience in providing strategic advice to senior business leaders on diverse policy and social issues spread across sectors. With more than 15 years in corporate and strategic communications, Proful has held significant positions such as Director of Corporate Affairs and Communications at JTI India, Head of Government Relations at Diageo, Head of Corporate Affairs at ABinBev India, Vice-President at Corporate Affairs at Renew India, and Head of Corporate Affairs at Rapido."
            des2="Mr. Lal excels in his advice on navigating intricate regulatory landscapes, leveraging his extensive knowledge of public policy to shape organizational reputation and drive impactful policy transformations."
            theme="dark"
          />
          <Person
            name="Deepak Kumar Sahu"
            image="/team/advisors/3.jpeg"
            position="50% 20%"
            des1="Mr. Deepak Kumar Sahu is a seasoned strategic communications professional with over 15 years of expertise in journalism, communications, and public relations. As a media professional Mr. Sahu led reporting across sectors for marquee media houses including CNBC TV-18, Zee Media Corporation, Infraline Energy, News Corp VCcircle etc. His extensive experience spans across multiple sectors including energy, metals, fertilizers, pharmaceuticals, banking, commerce, and industries."
            des2=" Mr. Sahu’s versatile background enables him to deliver strategic and effective communication strategies tailored to the specific needs of diverse industries. With his exceptional skills and comprehensive knowledge, he has become a trusted and respected figure in the field of media and public relations."
            role="Advisor, Media and Communications"
            theme="dark"
          />
          <Person
            name="Sammrat A Dhawan"
            image="/team/person.jpg"
            position="50% 50%"
            des1="Sammrat A Dhawan is a seasoned executive with a two-decade-long career spanning public policy, regulatory affairs, and corporate strategy. He began his career in the Indian government, serving in the Ministry of Commerce & Industry and the Ministry of Finance, where he was instrumental in shaping SEZ frameworks, export-oriented policies, and foreign investment regulations—laying the foundation for his deep regulatory acumen.
"
            des2="Transitioning to the private sector, he brought his policy insight to global advisory firms like PwC, KPMG, and RSM, where he advised multinationals on navigating India’s complex regulatory environment across sectors like telecom, pharma, alcobev, and tech. At Pernod Ricard India, he led external affairs for the East Zone, driving regulatory liberalisation and forging key government relationships in the alcobev sector. He has also served as the Vice President and Head of Corporate Affairs at VOIS (Vodafone Intelligent Solutions), where he led policy engagements across data privacy, ESG, AI, and trade regulations, playing a central role in shaping industry narratives through bodies like NASSCOM, CII, and UKIBC."
            role="Advisor, Government Affairs"
            theme="dark"
          />

          {/* <Person
            name="Dr. Sabine Kapasi"
            image="/team/advisors/5.png"
            position="50% 20%"
            link="https://www.linkedin.com/in/dr-sabine-kapasi-1154891b/"
            role="Advisor, Industry and Economy
President, India SME Forum"
            des1="Dr. Sabine Kapasi is a seasoned public health expert with over a decade of experience in the field of public health policy.

Dr. Kapasi has specialized in In-Vitro Fertilization (IVF) and has gained recognition as an expert in the area. In addition to her clinical expertise, Dr. Kapasi holds a crucial role as the Health Policy and Governance Strategy Lead of the UN Covid-19 task force. Her extensive consulting experience encompasses diverse areas such as medical tourism, infrastructure, supply chain, OBAMA care, and medical insurance."
            des2="Dr. Kapasi has also been actively engaged with governments, including her role as a research analyst for the Delhi government’s Mohalla clinic program. She has provided valuable guidance to multiple governments on pandemic management strategies, particularly in socio-politically fragile areas."
            theme="dark"
          /> */}
        </div>
      </div>
      <Footer theme={"dark"} />
    </>
  );
}
