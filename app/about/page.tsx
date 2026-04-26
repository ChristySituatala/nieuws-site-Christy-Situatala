export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-black rounded-2xl border border-gray-800 px-8 py-10 flex flex-col gap-10">

        <div className="flex flex-col gap-4 border-b border-gray-800 pb-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none text-[#CFFF04]">
            DE OPDRACHT
          </h1>

          <p className="text-white text-lg leading-relaxed max-w-3xl">
            Voor deze opdracht verwachten we de werkende Netlify-URL van je live site,
            de link naar je GitHub-repository, en een screenshot van de deploy-status op Netlify.
          </p>
        </div>

        <div className="flex flex-col gap-6">

          <div className="flex gap-6 p-6 bg-black border border-gray-800 rounded-xl hover:shadow-md transition">
            <div className="w-1 bg-[#CFFF04]" />

            <div className="flex flex-col gap-2">
              <h2 className="text-[#CFFF04] text-sm uppercase tracking-widest font-bold">
                Publicatieproces
              </h2>

              <p className="text-white leading-relaxed">
                Upload je volledige code naar GitHub en verbind deze met Netlify.
                Hierdoor wordt je site automatisch gebouwd en gehost bij elke update.
              </p>
            </div>
          </div>

          <div className="flex gap-6 p-6 bg-black border border-gray-800 rounded-xl hover:shadow-md transition">
            <div className="w-1 bg-[#CFFF04]" />

            <div className="flex flex-col gap-2">
              <h2 className="text-[#CFFF04] text-sm uppercase tracking-widest font-bold">
                Oplevering
              </h2>

              <p className="text-white leading-relaxed">
                Lever de Netlify-URL, GitHub-repository en een screenshot van de deploy-status aan.
              </p>
            </div>
          </div>

          <div className="flex gap-6 p-6 bg-black border border-gray-800 rounded-xl hover:shadow-md transition">
            <div className="w-1 bg-[#CFFF04]" />

            <div className="flex flex-col gap-2">
              <h2 className="text-[#CFFF04] text-sm uppercase tracking-widest font-bold">
                Kwaliteit & toegankelijkheid
              </h2>

              <p className="text-white leading-relaxed">
                De site moet publiek toegankelijk zijn, zonder fouten zoals 404’s,
                en een volledige functionele gebruikerservaring bieden.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}