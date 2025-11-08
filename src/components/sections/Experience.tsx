export default function Experience() {
  // TODO: Need some work on this
  const experiences = [
    {
      title: 'Firmware Test Engineer (Co-op)',
      company: 'NETINT',
      duration: 'Aug 2023 – Aug 2024',
      description: 'Automated firmware validation and improved testing frameworks.',
    },
    {
      title: 'Software Engineer (Volunteer)',
      company: 'Thrive Society',
      duration: 'Sep 2023 – Dec 2023',
      description: 'Built web features and assisted with deployment tasks.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}