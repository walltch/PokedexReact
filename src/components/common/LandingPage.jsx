  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Banner() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={`${process.env.PUBLIC_URL}/assets/banner.jpeg`}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter brightness-50"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Explorez le Monde des Pokémon</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Plongez dans l'univers enchanteur des Pokémon avec notre Pokédex complet. Découvrez des informations détaillées sur chaque espèce de Pokémon, leurs traits uniques, habitats et évolutions. Commencez votre aventure dès aujourd'hui et attrapez-les tous !
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  