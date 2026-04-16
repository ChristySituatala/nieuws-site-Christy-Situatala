export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">


      <nav className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-4">
        
        <h1 className="text-7xl font-black text-black">
          AI
        </h1>

      </nav>

      <div className="flex flex-col lg:flex-row gap-12">

        <article className="flex-1 flex flex-col gap-8">

          <div className="flex flex-col gap-4 border-l-4 border-[#CFFF04] pl-5">
            <p className="text-sm uppercase text-gray-500 font-semibold">
              De Technocraat
            </p>

            <h1 className="text-4xl font-black leading-tight">
              Leidt AI-slop tot de dood van sociale media?
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl">
              Sociale media slibben de jongste maanden angstwekkend snel dicht met AI-slop:
              video’s met mensen die niet bestaan en gebeurtenissen die zich nooit hebben voorgedaan.
              Blijven we daar in 2026 naar kijken?
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 border-b pb-4">
            <span>
              Door <span className="font-medium text-gray-700">Dominique Deckmyn</span>
            </span>
            <span>2 januari 2026</span>
          </div>

          <div className="flex flex-col gap-6 text-gray-800 leading-relaxed text-[17px]">

            <p>
              De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen,
              zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een
              realistisch uitziende video kan maken over elk onderwerp.
            </p>

            <p>
              De grote vraag voor 2026 is: willen we daarnaar blijven kijken?
            </p>

            <p>
              Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met
              de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes
              die bedrijven als Meta, Google en ByteDance (TikTok) voor ons maken.
            </p>

            <p>
              Als je op YouTube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je worden
              aangeboden van AI afkomstig.
            </p>

            <p>
              Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent
              een nieuw tijdperk in sociale media.
            </p>

            <p>
              Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, maar al snel
              bleek dat we ons liever vergapen aan de levens van celebrity’s en influencers — tijdperk twee.
              En nu komt er een stortvloed van AI-video’s aan.
            </p>

            <div className="border-l-4 border-[#CFFF04] pl-4 italic text-gray-600">
              Hoe meer AI in onze feed verschijnt, hoe minder we kijken naar echte mensen.
            </div>

            <p>
              Nog meer kattenvideo’s, onmogelijke stunts, spectaculaire taarten of gewelddadige pranks —
              of wat ook je ding mag zijn.
            </p>

            <p>
              Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd.
            </p>

            <p>
              Misschien. Maar zelf ben ik de afgelopen maanden gevoeliger geworden voor AI-slop:
              zodra ik vermoed dat iets AI-gegenereerd is, klik ik het weg.
            </p>

            <p>
              Net zoals ik stop met een tekst lezen zodra ik vermoed dat AI de voornaamste auteur was.
            </p>

            <p>
              Maar horen ze thuis op Instagram en Facebook? Wat is nog de sociale dimensie van een eindeloze
              stroom computergegenereerde video’s, aanbevolen door een algoritme?
            </p>

            <p>
              In die zin zien we misschien wel de dood van sociale media. Al lijkt Zuckerberg daar niet echt
              wakker van te liggen.
            </p>

          </div>

          <div className="my-10 flex flex-col items-center gap-3 cursor-pointer group">
            
            <div className="relative w-full max-w-2xl rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(207,255,4,0.35)] group-hover:border-[#CFFF04]/50 group-hover:-translate-y-1">
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_center,rgba(207,255,4,0.15),transparent_70%)]"></div>

              <img
                src="/dachs pc wallpaper blauw kopie.png"
                alt="Advertentie"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Advertentie
            </p>

            <span className="text-xs text-gray-400 group-hover:text-[#CFFF04] transition flex items-center gap-1">
              Bekijk meer →
            </span>
          </div>

        </article>

        <aside className="w-full lg:w-80 flex flex-col gap-6">

          <div className="bg-black p-5 rounded-xl shadow-sm space-y-3">
            <h3 className="font-black text-lg text-[#CFFF04]">GERELATEERD</h3>

            <div className="flex flex-col gap-3 text-sm text-white">
              <p className="hover:text-[#CFFF04] cursor-pointer">
                AI-videogeneratoren veranderen de filmindustrie
              </p>
              <p className="hover:text-[#CFFF04] cursor-pointer">
                De toekomst van sociale media in 2026
              </p>
              <p className="hover:text-[#CFFF04] cursor-pointer">
                Hoe algoritmes bepalen wat jij ziet
              </p>
            </div>
          </div>

          <div className="bg-black p-7 rounded-xl space-y-2">
            <h3 className="font-black text-[#CFFF04]">OVER DE AUTEUR</h3>
            <p className="text-sm text-white">
              Dominique Deckmyn is technologiejournalist en schrijft over digitale trends,
              AI en de impact van technologie op de samenleving.
            </p>
          </div>

        </aside>

      </div>
    </div>
  );
}