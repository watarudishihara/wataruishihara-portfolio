export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Wataru Ishihara</h1>
        <p className="text-blue-600">
          <a href="mailto:wataruishihara203@gmail.com">
            wataruishihara203@gmail.com
          </a>{" "}
          | (669) 356-2340
        </p>
      </header>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-4">
          Professional Experience
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold">
            Data Science / Project Management Intern – Reazon Holdings (“menu” Food Delivery App)
          </h3>
          <p className="italic">Tokyo, Japan | July 2025 – Sept 2025</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Developed user segmentation pipeline using Word2Vec embeddings and neural clustering, increasing first-time user purchase rate by 15%.</li>
            <li>Analyzed first-session behavior with SQL/DuckDB and Python, discovering predictive paths that increased retention and influenced product design.</li>
            <li>Presented findings directly to CEO, AI/Data Science teams, and senior leadership, shaping company strategy.</li>
            <li>Led cross-functional coordination with engineers and designers to translate analysis into user-facing improvements.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Bilingual Interpreter – UC Davis Continuing and Professional Education</h3>
          <p className="italic">Davis, CA | Sept 2022 – June 2025</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Delivered real-time Japanese ⇄ English interpretation for lectures and materials in a mini MBA program, ensuring smooth communication between instructors and students.</li>
          </ul>
        </div>
      </section>

      {/* Research Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-4">
          Research Experience
        </h2>
        <h3 className="font-semibold">
          Undergraduate Research Assistant – Computational Physics
        </h3>
        <p className="italic">
          University of California, Davis | Sept 2024 – June 2025
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Simulated phase transitions in Ising models using Monte Carlo methods and the Metropolis algorithm.</li>
          <li>Developed Python scripts for statistical sampling and spin configuration analysis.</li>
          <li>Analyzed temperature-dependent behavior, identifying critical points and phase transitions.</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-4">
          Projects
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>User Segmentation via Word2Vec (Reazon Holdings, Internship)</strong> – Implemented embeddings + clustering to segment food delivery users; presented insights to CEO and data science teams.
          </li>
          <li>
            <strong>Transformer Language Model</strong> – Built a Transformer from scratch in PyTorch with multi-head attention, positional encodings, and feedforward blocks. Trained on Wikipedia text data to generate coherent sequences.
          </li>
          <li>
            <strong>Clothing Type Classification</strong> – Developed a CNN in PyTorch to classify Fashion-MNIST clothing images with high accuracy.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-4">
          Education
        </h2>
        <p>
          <strong>University of California, Davis</strong> | Computational Physics Major B.S. | Sept 2021 – June 2025
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-4">
          Skills
        </h2>
        <p>
          <strong>Programming & Data:</strong> Python, PyTorch, SQL, Pandas, NumPy, SciPy, MATLAB, OpenCV  
          <br />
          <strong>Machine Learning & AI:</strong> Deep Learning, Transformers, CNNs, Word2Vec, Model Training & Evaluation  
          <br />
          <strong>Data Analysis & Visualization:</strong> Statistical Analysis, Monte Carlo Methods, Experiment Design, Seaborn, Matplotlib  
          <br />
          <strong>Tools:</strong> Vercel, Git, Onshape (CAD), Adobe Photoshop, Premiere Pro  
          <br />
          <strong>Languages:</strong> Japanese (Native), English (Native), Korean (Conversational)  
        </p>
      </section>
    </div>
  );
}
