import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';
import { FiGithub } from 'react-icons/fi';

import optimizingImg from '../assets/optimizing.png';
import redditImg     from '../assets/reddit.png';
import llvmImg       from '../assets/llvm.png';
import schedulerImg  from '../assets/task.png';
import ecommerceImg  from '../assets/ecommerce.png';
import onlineStoreImg  from '../assets/shopping.png';
import virtualAirImg  from '../assets/air.png';
import phoneBookImg  from '../assets/phone.png';
import eduCrawlerImg  from '../assets/research.png';
import uaskImg  from '../assets/uask.png';
import raidImg  from '../assets/raid.png';
import loanImg  from '../assets/loan.png';
const allProjects = [
 
  {
  name: 'E-Commerce Mobile App',
  image: ecommerceImg,               // import this from your assets, e.g.:
                                     // import ecommerceImg from '../assets/ecommerce.png';
  link: 'https://github.com/RanjithaNarasimhamurthy/EcommerceApplication', // replace with your live/demo URL if available
  tech: [
    '.NET MAUI',
    'C#',
    'ASP.NET Core Web API',
    'Twilio SMS',
    'MailKit SMTP',
    'SQLite'
    
  ],
  details: [
    'Built a cross-platform shopping application targeting Android and iOS from a single .NET MAUI C# codebase, delivering native performance and consistent UX.',
    'Implemented password-less OTP authentication via Twilio SMS and MailKit-sent email, simplifying onboarding while maintaining strong security.',
    'Developed an end-to-end REST API in ASP.NET Core with controllers for products, categories, cart, orders, user profiles & addresses, vendor uploads, and customer feedback.',
    // 'Leveraged SQLite for offline-first caching of product catalogs and cart state, allowing seamless browsing and shopping even when network connectivity is lost.',
    'Architected the client using MVVM with XAML views bound to ViewModels and dependency-injected HTTP services, ensuring clean separation of concerns and maintainable UI code.',
    // 'Set up a GitHub Actions pipeline to build, test, and package Android APKs and iOS archives on every push, streamlining releases and guaranteeing consistent builds.'
  ],
},
 
  {
    name: 'Reddit Search Engine',
    image: redditImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/RedditSearchEngineWebApp',
    tech: ['PyLucene','Web Crawling', 'BERT', 'Flask','FAISS'],
    details: [
     'Developed a hybrid Reddit search engine using PyLucene for keyword retrieval and BERT+FAISS for semantic search with contextual embeddings.',
    'Built a Flask web interface for real-time querying and comparison of NLP methods in ranking, speed, and scalability.',
    'Crawled and managed Reddit posts and comments using PRAW in 10 MB data chunks, ensuring efficient data ingestion and preprocessing for indexing.',
    'Benchmarked and compared PyLucene inverted–index vs. BERT+FAISS semantic search on indexing time (~30 s), query latency, and result relevance, highlighting key performance trade‑offs.'
    ],
  },
  {
  name: 'Online Shopping Store',
  image: onlineStoreImg, // import this from your assets, e.g.:
//   import onlineStoreImg from '../assets/online-shopping-store.png';
  link: 'https://github.com/RanjithaNarasimhamurthy/ShoppingCartApp',
  tech: [
    'ASP.NET Core MVC',
    'Microsoft SQL Server',
    'Entity Framework Core (Code-First & Migrations)',
    
    'Razor Views',
    'HTML/CSS/JavaScript'
  ],
  details: [
    'Built an ASP.NET Core MVC application with product listing, category-based search, and a responsive navigation/search UI for seamless browsing and cart access.',
    'Created product detail pages featuring images, descriptions, pricing, and an “Add to Cart” workflow with real-time success and error notifications.',
    'Developed cart management and checkout views allowing users to update quantities, remove items, view dynamic totals, capture shipping details, and finalize orders in one flow.',
    'Architected the solution using EF Core Code-First (POCO models, DbContext, repositories), MVC controllers, Razor views, and automated database setup via `dotnet ef database update`.'
  ],
},
{
    name: 'Compiler Optimization with LLVM',
    image: llvmImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/LLVM',
    tech: ['LLVM', 'C++', 'Static Analysis'],
    details: [
      'Developed LLVM compiler passes for constant propagation and SSA‑based optimizations, improving execution efficiency by 30% and refining debugging techniques for system performance.',
    'Collaborated on a 3‑phase project—analysis, transformation, and validation—to enhance overall compiler optimizations.',
    'Built an automated test harness (create_input.sh & test.sh) to convert C code to LLVM IR and run each pass via `opt`, ensuring correctness across hundreds of sample programs.',
    'Leveraged LLVM’s FunctionPass API to traverse functions, iterate basic blocks and instructions, cast operands for analysis, and use predecessor/successor calls for advanced control‑flow optimizations.'
    ],
  },
 {
  name: 'Serverless Task Scheduler',
  image: schedulerImg,
  link: 'https://github.com/RanjithaNarasimhamurthy/aws-task-scheduler',
  tech: ['API Gateway', 'AWS Lambda', 'EventBridge Scheduler', 'DynamoDB', 'CloudWatch', 'AWS SAM'],
  details: [
    'Built a “set-it-and-forget-it” scheduler: create, update, cancel, and fetch one-time jobs via REST; at the exact UTC time, EventBridge Scheduler invokes a Lambda with the provided payload.',
    'Implemented idempotent creates (idempotency keys + DynamoDB conditional writes) and least-privilege IAM where Scheduler assumes a role that can only invoke the target Lambda.',
    'Added observability with structured CloudWatch logs and X-Ray tracing; tracked job status in DynamoDB (ACTIVE / COMPLETED / CANCELED) for easy debugging and audits.',
    'Optimized for cost and ops using DynamoDB PAY_PER_REQUEST and TTL to auto-expire completed items; packaged everything with AWS SAM for repeatable, one-command deploys.'
  ],
},
{
  name: 'Virtual Air Sketching',
  image: virtualAirImg, // import this from your assets, e.g.:
//   import virtualAirImg from '../assets/virtual-air-sketching.png';
  link: 'https://github.com/RanjithaNarasimhamurthy/VirtualAirSketching',
  tech: [
    'Python',
    'OpenCV',
    'Flask',
    'Tkinter',
    'NumPy'
  ],
  details: [
    'Implemented real-time color tracking of a marker via OpenCV with dynamic HSV sliders for robust detection across lighting conditions.',
    'Enabled virtual drawing with on-screen buttons to switch colors (Blue/Green/Red/Yellow), clear the canvas with a gesture, and draw by moving the tracked object.',
    'Built a Tkinter confirmation dialog and used Pillow to export sketches as both PNG and PDF files upon Save.',
    'Hosted a basic Flask web interface (frontend.html) for drawing preview and future web integration.'
  ],
},
{
  name: 'AI-Generated Text Detection (RAID Dataset)',
  image: raidImg,
  link: 'https://github.com/RanjithaNarasimhamurthy/AI-Generated-Text-Detection-with-RAID-Dataset', // update to your repo/demo
  tech: [
    'Python',
    'pandas & NumPy',
    'Google Colab',
    'scikit-learn (TF-IDF, LogisticRegression)',
    'HuggingFace Transformers (RoBERTa)',
    
  ],
  details: [
    'Sampled and balanced a 75K subset from the 5M+ RAID dataset to ensure equal representation of human-written and AI-generated text.',
      'Built a baseline TF-IDF feature pipeline with Logistic Regression to quickly gauge separability.',
      'Fine-tuned a RoBERTa transformer on the same data, achieving substantially higher precision and recall.',
      'Compared both models using accuracy, precision, recall and F1 metrics, demonstrating the clear advantage of deep learning for this task.'
  ]
},
{
    name: 'U-ASK: Spatial-Textual Query System',
    image: uaskImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/U-ASK',
    tech: [
      'PostgreSQL + PostGIS',
      'OpenSearch',
      'Python',
     
      'TF-IDF & R-tree',
      'Custom Quadtree Index'
    ],
    details: [
      'Built a hybrid spatial-textual query engine supporting POWER (top-k), Boolean Range (include/exclude keywords), and RCA (analytics-style aggregation) algorithms via a REST API and Streamlit demo.',
      'Preprocessed 5 M geotagged tweets: stopword removal, stemming, TF-IDF weighting, then indexed into PostGIS (R-tree) and OpenSearch (inverted index).',
      'Implemented a custom Textual-Enhanced Quadtree (TEQ) to jointly prune spatial cells and keyword postings, yielding sub-50 ms 95th-percentile latencies at 2 000–3 500 QPS.',
      'Demonstrated real-world use-cases: POI search (“quiet cafes”), disaster response (“flooded” tweets), and targeted marketing (“vegan” reviews), with future plans for semantic ranking and dynamic updates.'
    ]
  },
  
  
   {
    name: 'Optimizing Retail Strategies with Big Data Analytics',
    image: optimizingImg,
    tech: ['Spark', 'Python', 'Scikit-learn'],
    details: [
      'Collaborated with a team of 4 to design a big data framework using K‑Means, Random Forest, and Decision Trees for customer segmentation, churn prediction, and sales forecasting.',
    'Accelerated data processing using parallel computing for improved system performance and efficiency.',
    'Built end‑to‑end PySpark pipelines for data cleansing, feature engineering, and encoding, enabling seamless scaling to multimillion‑row datasets.',
    'Applied SHAP‑based model explainability and feature importance analysis to identify the top drivers of customer churn and loyalty, informing targeted marketing campaigns.'
    ],
  },
  {
    name: 'Phone Book Application',
    image: phoneBookImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/PhoneBookApplication',
    tech: [
      'C#',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'SQL Server'
    ],
    details: [
      'Built a full-stack ASP.NET Core MVC phone-book app enabling administrators to view, add, edit and delete contacts.',
      'Structured data access via EF Core Code-First: defined POCO models, a DbContext, repository interfaces and a data layer for clean separation of concerns.',
      'Created Razor views and a shared partial layout to display admin info, contact lists, forms with validation, and confirmation prompts in a consistent UI.',
      'Implemented search by contact attributes, incremental IDs, and CRUD workflows (Create/Edit/Delete) with user-friendly feedback and error handling.'
    ]
  },
  {
    name: 'Web Crawler & Search Engine (.edu Research)',
    image: eduCrawlerImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/ResearchSearchEngine',
    tech: [
      'Python',
      'BeautifulSoup',
      'PyLucene',
      'Flask'
    ],
    details: [
      'Implemented a breadth-first Python crawler for .edu research sites: normalized URLs, hashed them for deduplication, filtered for HTML, and saved raw pages into `./data/html_pages` with SHA-256 filenames.',
      'Built a PyLucene indexer to tokenize & index page titles and bodies, applying BM25 ranking and custom snippet generation for relevant context previews.',
      'Created a Flask web UI exposing a keyword search box that returns top-10 results with titles, URLs, and contextual snippets from the Lucene index.',
      'Structured the repo into three modules—crawler, indexer, and web app—with platform scripts for Windows  and macOS/Linux .'
    ]
  },
  {
    name: 'Loan Approval Prediction & Analysis',
    image: loanImg,
    link: 'https://github.com/RanjithaNarasimhamurthy/LoanApprovalPredictionAnalysis',
    tech: [
      'Python',
      'pandas & NumPy',
      'scikit-learn (Logistic Regression, Random Forest)',
      'XGBoost',
      'Matplotlib & Seaborn'
    ],
    details: [
      'Performed end-to-end data cleaning and feature engineering on a real-world loan dataset—imputing missing values, encoding categoricals, and scaling numerical features.',
      'Conducted exploratory data analysis with visualizations to uncover key predictors of loan approval such as income, credit history and loan amount.',
      'Trained and compared multiple classification models (Logistic Regression, Random Forest, XGBoost) using cross-validation and ROC-AUC for robust performance assessment.',
      'Packaged the best model into a simple prediction pipeline, and documented the entire workflow—including data preprocessing, model training, and evaluation metrics—in a clear, shareable Jupyter notebook.'
    ],
  },

];

export default function Projects() {
  const [modalProj, setModalProj] = useState(null);
  const [showAll, setShowAll]   = useState(false);

  // decide how many to render
  const projects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map(p => (
          <div
            key={p.name}
            className={styles.card}
            onClick={() => setModalProj(p)}
          >
            <img src={p.image} alt={p.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.headerRow}>
                <h3 className={styles.name}>{p.name}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkIcon}
                    onClick={e => e.stopPropagation()}
                  >
                    <FiGithub />
                  </a>
                )}
              </div>
              <ul className={styles.tech}>
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <p className={styles.detailPara}>
                {p.details[0]}
                {p.details.length > 1 && (
                  <span className={styles.expandHint}>…Click to read more</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* toggle button */}
      <div className={styles.showMoreWrapper}>
        <button
          className={styles.showMoreBtn}
          onClick={() => setShowAll(s => !s)}
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>

      {modalProj && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalProj(null)}
        >
          <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setModalProj(null)}
            >×</button>
            <h3 className={styles.modalTitle}>{modalProj.name}</h3>
            <ul className={styles.modalTech}>
              {modalProj.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
            <div className={styles.modalDetails}>
              {modalProj.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            {modalProj.link && (
              <a
                href={modalProj.link}
                target="_blank"
                rel="noreferrer"
                className={styles.modalLink}
              >
                <FiGithub /> View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}