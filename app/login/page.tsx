export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <nav className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-4">
        <h1 className="text-7xl font-black text-black">
          DARIO AMODEI
        </h1>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">

        <article className="flex-1 flex flex-col gap-10">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 border-l-4 border-[#CFFF04] pl-5">

            <div className="flex-1 flex flex-col gap-4">
              <p className="text-sm uppercase text-gray-500 font-semibold">
                De Technocraat
              </p>

              <h1 className="text-4xl font-black leading-tight">
                Was het verzet van Dario Amodei het “Ik ben Spartacus!”-moment van Silicon Valley?
              </h1>
            </div>

            <div className="flex-1 flex items-end">
              <p className="text-lg text-gray-700">
                Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth,
en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een
keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
              </p>
            </div>

          </div>

          {/* AUTHOR */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 border-b pb-4 gap-2">
            <span>
              Door <span className="font-medium text-gray-700">Dominique Deckmyn</span>
            </span>
            <span>13 maart 2026 om 23:59</span>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-8 text-gray-800 leading-relaxed text-[17px]">

            <section className="flex flex-col gap-4">
              <p>
               Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great
Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote
publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De
kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde am i c us b r i e f s ,
documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische
strijd tegen het Pentagon.
              </p>

              <p>
                Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete Hegseth
Anthropic oplegt, namelijk het uitroepen tot “risico voor de toeleveringsketen”
, creëert
“een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de
regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het
aandurft het oneens te zijn”
. En dat staat in een document dat – indirect – ondertekend is
door Amazon, Google en Apple (via de belangengroep Chamber of Progress).
              </p>

              <p>
               Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? Nee, daarvoor is het allemaal
veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije
meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te
formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs
voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.
              </p>

              <p>
               Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te
ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen
invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu
verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog
wel steun voor het idee dat iedereen zijn zegje mag hebben.
              </p>

              <p>
               Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege
het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan
van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals
vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politieke
gevoelige uitspraken horen.
              </p>

              <p>
              Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat
(zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was eerder
omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de
werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met
Defensie liet vallen.
              </p>

               <p>
              Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,
en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest
geavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe
hebben om volgens hun overtuiging te handelen.
              </p>

               <p>
              Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze
zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een
ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
              </p>

              
            </section>


          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">

          <div className="bg-black p-5 rounded-xl shadow-sm flex flex-col gap-4">
            <h3 className="font-black text-lg text-[#CFFF04]">GERELATEERD</h3>

            <div className="flex flex-col gap-3 text-sm text-white">
              <p className="hover:text-[#CFFF04] cursor-pointer">
                Wat betekent AI-ethiek?
              </p>
              <p className="hover:text-[#CFFF04] cursor-pointer">
                De macht van big tech
              </p>
              <p className="hover:text-[#CFFF04] cursor-pointer">
                AI en politiek
              </p>
            </div>
          </div>

          <div className="bg-black p-7 rounded-xl flex flex-col gap-2">
            <h3 className="font-black text-[#CFFF04]">OVER DE AUTEUR</h3>
            <p className="text-sm text-white">
              Dominique Deckmyn is technologiejournalist en schrijft over AI en digitale trends.
            </p>
          </div>

        </aside>

      </div>
    </div>
  );
}