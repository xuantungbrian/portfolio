export default function Skills() {
  // Needs to do something about this
  const skills = [
    'Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Docker', 'Selenium'
  ]
  
  return (
    <section className="mt-12">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="px-3 py-1 rounded-md border text-sm text-gray-700">{s}</span>
            ))}
          </div>
        </section>
  )
}