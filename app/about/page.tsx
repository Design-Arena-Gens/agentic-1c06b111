export default function AboutPage(){
  return (
    <div className="container-max py-12 space-y-4">
      <h1 className="text-3xl font-bold">À propos</h1>
      <p>Notre mission: promouvoir l’énergie verte grâce à des outils de calcul simples et fiables.</p>
      <p>Nous croyons en une transition énergétique durable, accessible à tous.</p>
      <div className="card p-6">
        <div className="font-semibold">Liens</div>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li><a className="text-primary-600 hover:underline" href="#">Documentation</a></li>
          <li><a className="text-primary-600 hover:underline" href="#">API</a></li>
        </ul>
      </div>
    </div>
  );
}
