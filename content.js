let isActive = false;
let observer = null;

const academicInstitutions = [
  "Harvard University", "Stanford Online High School", 
  "University of Phoenix", "MIT OpenCourseWare",
  "Coursera Global Campus", "Khan Academy Virtual School",
  "Udacity Nanodegree Program", "Southern New Hampshire University Online",
  "Western Governors University", "Grand Canyon University Online", "Harvard University",
  "Massachusetts Institute of Technology (MIT)",
  "Stanford University",
  "California Institute of Technology (Caltech)",
  "University of California, Berkeley (UC Berkeley)",
  "Princeton University",
  "Yale University",
  "Columbia University",
  "University of Chicago",
  "University of Pennsylvania",
  "Johns Hopkins University",
  "Cornell University",
  "Duke University",
  "University of Michigan",
  "University of California, Los Angeles (UCLA)",
  "Northwestern University",
  "New York University (NYU)",
  "Carnegie Mellon University",
  "University of Texas at Austin",
  "University of Washington",
  "University of Toronto",
  "University of British Columbia (UBC)",
  "McGill University",
  "University of Alberta",
  "McMaster University",
  "University of Waterloo",
  "University of Montreal",
  "University of Calgary",
  "Queen's University",
  "Western University",
  "University of Oxford",
  "University of Cambridge",
  "Imperial College London",
  "University College London (UCL)",
  "London School of Economics and Political Science (LSE)",
  "University of Edinburgh",
  "King's College London",
  "University of Manchester",
  "University of Bristol",
  "University of Warwick",
  "Technical University of Munich",
  "Ludwig Maximilian University of Munich (LMU)",
  "Heidelberg University",
  "Humboldt University of Berlin",
  "Free University of Berlin",
  "University of Freiburg",
  "RWTH Aachen University",
  "Karlsruhe Institute of Technology (KIT)",
  "Sorbonne University",
  "École Normale Supérieure (ENS)",
  "Paris Sciences et Lettres University (PSL)",
  "École Polytechnique",
  "University of Paris-Saclay",
  "ETH Zurich (Swiss Federal Institute of Technology)",
  "École Polytechnique Fédérale de Lausanne (EPFL)",
  "University of Zurich",
  "University of Amsterdam (Netherlands)",
  "Delft University of Technology (Netherlands)",
  "Karolinska Institute (Sweden)",
  "Uppsala University (Sweden)",
  "University of Copenhagen (Denmark)",
  "University of Helsinki (Finland)",
  "University of Vienna (Austria)",
  "University of Bologna (Italy)",
  "Sapienza University of Rome (Italy)",
  "University of Barcelona (Spain)",
  "Complutense University of Madrid (Spain)",
  "Tsinghua University",
  "Peking University",
  "Fudan University",
  "Shanghai Jiao Tong University",
  "Zhejiang University",
  "University of Tokyo",
  "Kyoto University",
  "Osaka University",
  "Tokyo Institute of Technology",
  "Seoul National University (SNU)",
  "Korea Advanced Institute of Science and Technology (KAIST)",
  "Pohang University of Science and Technology (POSTECH)",
  "Yonsei University",
  "Indian Institute of Technology (IIT) Bombay",
  "Indian Institute of Technology (IIT) Delhi",
  "Indian Institute of Science (IISc) Bangalore",
  "University of Delhi",
  "Jawaharlal Nehru University (JNU)",
  "National University of Singapore (NUS)",
  "Nanyang Technological University (NTU)",
  "University of Hong Kong (HKU)",
  "Chinese University of Hong Kong (CUHK)",
  "National Taiwan University (NTU)",
  "University of Malaya (Malaysia)",
  "Chulalongkorn University (Thailand)",
  "University of Melbourne",
  "Australian National University (ANU)",
  "University of Sydney",
  "University of Queensland",
  "University of New South Wales (UNSW)",
  "Monash University",
  "University of Auckland",
  "University of Otago",
  "King Abdulaziz University",
  "King Saud University",
  "Hebrew University of Jerusalem",
  "Tel Aviv University",
  "Technion – Israel Institute of Technology",
  "Khalifa University",
  "United Arab Emirates University (UAEU)",
  "University of Cape Town",
  "University of Witwatersrand",
  "Stellenbosch University",
  "Cairo University",
  "American University in Cairo (AUC)",
  "University of Nairobi",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "University of São Paulo (USP)",
  "State University of Campinas (UNICAMP)",
  "Federal University of Rio de Janeiro (UFRJ)",
  "National Autonomous University of Mexico (UNAM)",
  "Monterrey Institute of Technology and Higher Education (ITESM)",
  "University of Buenos Aires (UBA)","Pontifical Catholic U",
  "University of Chile (UC)",
  "University of Chile"
];
const buzzphrases = [
  "Systemic exclusion in curriculum design",
  "Algorithmic bias in admissions processes",
  "Neurodiversity accommodation gaps",
  "Intersectional resource allocation disparities",
  "Digital accessibility shortcomings",
  "Implicit bias in virtual learning environments",
  "Cultural competency framework deficiencies",
  "Socioeconomic accessibility barriers",
  "Systemic exclusion in curriculum design",
  "Algorithmic bias in admissions processes",
  "Neurodiversity accommodation gaps",
  "Intersectional resource allocation disparities",
  "Digital accessibility shortcomings",
  "Implicit bias in virtual learning environments",
  "Cultural competency framework deficiencies",
  "Socioeconomic accessibility barriers",
  "Equity-driven pedagogical reform",
  "Decolonization of academic content",
  "Inclusive assessment methodologies",
  "Universal design for learning (UDL) implementation gaps",
  "Intersectional representation in faculty hiring",
  "Data-driven equity audits",
  "Structural inequities in STEM education",
  "Bias in AI-driven educational tools",
  "Underrepresentation in leadership pipelines",
  "Accessibility gaps in online learning platforms",
  "Culturally responsive teaching practices",
  "Equity-focused institutional policies",
  "Barriers to multilingual education access",
  "Disparities in mental health support systems",
  "Inclusive technology adoption challenges",
  "Intersectional barriers in career advancement",
  "Systemic inequities in research funding allocation",
  "Bias in peer review processes",
  "Accessibility gaps in physical campus infrastructure",
  "Equity challenges in international student support",
  "Inclusive design for assistive technologies",
  "Intersectional disparities in graduation rates",
  "Bias in standardized testing frameworks",
  "Equity gaps in extracurricular participation",
  "Inclusive representation in academic publications",
  "Systemic barriers to first-generation student success",
  "Bias in faculty tenure and promotion processes",
  "Accessibility challenges in hybrid learning models",
  "Intersectional inequities in mentorship opportunities",
  "Equity gaps in access to advanced coursework",
  "Inclusive design for digital learning tools",
  "Systemic barriers to LGBTQ+ student inclusion",
  "Bias in curriculum content selection",
  "Accessibility gaps in library resources",
  "Intersectional disparities in financial aid distribution",
  "Equity challenges in disability accommodations",
  "Inclusive representation in academic conferences",
  "Systemic barriers to rural student access",
  "Bias in admissions recommendation systems",
  "Accessibility gaps in virtual reality learning environments",
  "Intersectional inequities in faculty-student ratios",
  "Equity gaps in access to research opportunities",
  "Inclusive design for campus safety protocols",
  "Systemic barriers to indigenous student inclusion",
  "Bias in academic citation practices",
  "Accessibility gaps in STEM lab environments",
  "Intersectional disparities in study abroad opportunities",
  "Equity challenges in access to technology resources",
  "Inclusive representation in academic leadership",
  "Systemic barriers to non-traditional student success",
  "Bias in academic journal editorial processes",
  "Accessibility gaps in experiential learning programs",
  "Intersectional inequities in access to internships",
  "Equity gaps in access to mental health resources",
  "Inclusive design for campus housing policies",
  "Systemic barriers to refugee student inclusion",
  "Bias in academic conference speaker selection",
  "Accessibility gaps in online course materials",
  "Intersectional disparities in access to tutoring services",
  "Equity challenges in access to career counseling",
  "Inclusive representation in academic advisory boards",
  "Systemic barriers to low-income student success",
  "Bias in academic award nomination processes",
  "Accessibility gaps in campus transportation systems",
  "Intersectional inequities in access to scholarships",
  "Equity gaps in access to faculty mentorship",
  "Inclusive design for campus event planning",
  "Systemic barriers to undocumented student inclusion",
  "Bias in academic research topic selection",
  "Accessibility gaps in virtual collaboration tools",
  "Intersectional disparities in access to alumni networks",
  "Equity challenges in access to leadership training",
  "Inclusive representation in academic accreditation processes",
  "Systemic barriers to transfer student success",
  "Bias in academic grant review processes",
  "Accessibility gaps in campus dining services",
  "Intersectional inequities in access to study spaces",
  "Equity gaps in access to professional development",
  "Inclusive design for campus wellness programs",
  "Systemic barriers to veteran student inclusion",
  "Bias in academic textbook selection processes",
  "Accessibility gaps in campus recreational facilities",
  "Intersectional disparities in access to childcare services",
  "Equity challenges in access to academic advising",
  "Inclusive representation in academic policy-making",
  "Systemic barriers to part-time student success",
  "Bias in academic conference panel selection",
  "Accessibility gaps in campus emergency protocols",
  "Intersectional inequities in access to financial literacy resources",
  "Equity gaps in access to peer mentorship programs",
  "Inclusive design for campus sustainability initiatives",
  "Systemic barriers to international faculty inclusion",
  "Bias in academic research funding allocation",
  "Accessibility gaps in campus technology support services",
  "Intersectional disparities in access to academic accommodations",
  "Equity challenges in access to community engagement opportunities",
  "Inclusive representation in academic curriculum review boards"  
];

// Initialize from storage
chrome.storage.local.get('isActive', (data) => {
  isActive = data.isActive || false;
  if (isActive) initializeProcess();
});

function initializeProcess() {
  if (window.location.href.includes('/thankyou')) {
      // If we're on thank-you page, wait and redirect
      setTimeout(() => {
          window.location.href = "https://enddei.ed.gov/";
      }, 10000);
  } else {
      // Setup observer for form page
      setupFormObserver();
  }
}

function setupFormObserver() {
  if (document.getElementById('tipsForm')) {
      executeSubmissionCycle();
      return;
  }

  if (observer) observer.disconnect();
  
  observer = new MutationObserver((mutations) => {
      if (document.getElementById('tipsForm')) {
          observer.disconnect();
          executeSubmissionCycle();
      }
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
}

// Keep your existing generate* functions here...

function executeSubmissionCycle() {
  if (!isActive) return;

  try {
      // Fill form fields
      document.getElementById('email').value = generateEmail();
      document.getElementById('location').value = generateRandomInstitution();
      document.getElementById('zipcode').value = Math.floor(10000 + Math.random() * 90000);
      document.getElementById('description').value = generateDescription();

      // Submit form
      document.querySelector('form').dispatchEvent(new Event('submit'));
  } catch (error) {
      console.error('Submission error:', error);
      if (isActive) setTimeout(executeSubmissionCycle, 5000);
      return;
  }

  // Handle post-submission flow
  setTimeout(() => {
      if (window.location.href.includes('/thankyou')) {
          setTimeout(() => {
              window.location.href = "https://enddei.ed.gov/";
          }, 10000);
      } else if (isActive) {
          setTimeout(executeSubmissionCycle, 10000);
      }
  }, 3000);
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "start") {
      isActive = true;
      chrome.storage.local.set({ isActive: true });
      initializeProcess();
  } else if (message.action === "stop") {
      isActive = false;
      chrome.storage.local.set({ isActive: false });
      if (observer) observer.disconnect();
  }
});

// Handle page reloads/navigation
if (window.location.href.startsWith("https://enddei.ed.gov")) {
  chrome.storage.local.get('isActive', (data) => {
      if (data.isActive) initializeProcess();
  });
}