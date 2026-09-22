import { Header } from '../components/Header';
import { FadeIn } from '../components/FadeIn';
import { ExternalLink } from 'lucide-react';

export const Wine = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>

        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
          <img
            src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/hero.jpg"
            alt="Quinta do Pinto wine bottle on a coastal cliff overlooking the ocean"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
          <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-32">
            <FadeIn delay={0.1}>
              <div className="max-w-4xl">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">
                  NUstudios for Wine
                </span>
                <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.95] text-white">
                  You can't prompt three hundred years of heritage<span className="text-red-600">.</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl font-sans leading-relaxed">
                  AI doesn't know your terroir. We do — and we turn it into imagery worth talking about, for wineries across Portugal and beyond.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 01 THE PROBLEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">01 / The Problem</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
              Most wine content tastes the same<span className="text-red-600">.</span>
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-12">
              Rolling hills. A hand on a barrel. A sunset toast. Wineries across the Douro, Alentejo, and Vinho Verde are reaching for the same three shots. Most of them already have a better story — in an archive, in a family's memory, in a cellar — it just never makes it into the content.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-4">
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/vineyard.jpg" alt="Vineyard at sunset in the Douro valley" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/barrels.jpg" alt="Oak barrels in a wine cellar" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/pour.jpg" alt="Red wine being poured into a glass" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" />
          </div>
        </section>

        {/* 02 WHO THIS IS */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">02 / Who This Is</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
                AI is part of the process. Not the whole of it<span className="text-red-600">.</span>
              </h2>
              <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-12">
                We combine real creative and technical craft with AI to create beautiful, campaign-ready imagery — fast, and with precision. Every output is guided, shaped, and signed off by expert hands before it ever reaches you.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">Context Over Guesswork</p>
                <p className="text-sm text-black/60">We build on your specific brand, your specific heritage. Nothing we make will ever look like your competitors' content.</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">Taste Is Never Automated</p>
                <p className="text-sm text-black/60">Every image, video, and post is art-directed and approved by our founders. We never let the machines run unsupervised.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 THE TEAM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">03 / The Team</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
              Two decades of craft. One creative vision<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-5">
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/caroline.jpg" alt="Caroline Pires" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Caroline Pires — Technical Director</p>
                <p className="text-sm text-black/70">Nearly two decades of visual-effects experience across global ad campaigns and Oscar-winning films, including Martin Scorsese's <em>Hugo 3D</em>. Caroline keeps the technology flawless, so the craft never shows the seams.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/claudio.jpg" alt="Claudio Marcos" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Claudio Marcos — Creative Director</p>
                <p className="text-sm text-black/70">An art director who has built work for major cultural institutions, touring stage shows, and e-commerce brands from the ground up. Claudio makes sure every piece of creative still tells your story.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 CASE STUDY: CONCEPT */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">04 / Case Study — Quinta do Pinto</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
                A heritage winery, made contemporary<span className="text-red-600">.</span>
              </h2>
              <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-10">
                Before a single frame was built, we spent time with Quinta do Pinto itself — then found our way in through a tradition already carried through five centuries of Portuguese houses: azulejo.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">Discover</p>
                <p className="text-sm text-black/60">Quinta do Pinto is a historic estate rooted in centuries of Portuguese winemaking — the kind of heritage most brands can only claim.</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">Concept</p>
                <p className="text-sm text-black/60">Portuguese tradition grows into a contemporary world of wine — the same heritage, told through elegant, modern storytelling.</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter mb-4">Built, piece by piece<span className="text-red-600">.</span></h3>
            <p className="text-sm text-black/70 max-w-2xl mb-8">Every tile, vine, and grape was designed and built in 3D using AI generative tools, then animated into a living world. From a single drop of blue ink comes three hundred years of history — reconstructed frame by frame.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/sketch.jpg" alt="Concept sketch of the azulejo tile artwork" className="w-full h-64 object-cover rounded-md" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">Concept sketch</figcaption>
              </figure>
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/final3d.jpg" alt="Final rendered 3D azulejo piece" className="w-full h-64 object-cover rounded-md" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">Final 3D piece</figcaption>
              </figure>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/inkdrop.jpg" alt="Macro detail of a blue ink drop on cracked tile" className="w-full h-64 object-cover rounded-md" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">Detail — first frame</figcaption>
              </figure>
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/leafmacro.jpg" alt="Macro detail of hand-painted porcelain leaf and vine" className="w-full h-64 object-cover rounded-md" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">Detail — material control</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 05 CASE STUDY: DELIVER */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">05 / Case Study — Deliver</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
              One bottle, every format<span className="text-red-600">.</span>
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-10">
              Every campaign starts from a single e-commerce product shot — from there, we build full creative worlds around it: consistent brand, without repeating a single frame.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/ecommbase.jpg" alt="Base e-commerce product shot of the wine bottle" className="w-full h-40 object-cover rounded-md bg-black" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">E-commerce base</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world1.jpg" alt="Wine bottle styled against cracked concrete" className="w-full h-40 object-cover rounded-md" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">World 01</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world2.jpg" alt="Wine bottle styled with dramatic lighting" className="w-full h-40 object-cover rounded-md" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">World 02</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world3.jpg" alt="Hand holding the wine bottle" className="w-full h-40 object-cover rounded-md" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">World 03</figcaption>
            </figure>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter mb-4">The world, lived in<span className="text-red-600">.</span></h3>
          <p className="text-sm text-black/70 max-w-2xl mb-8">Beyond the bottle, the same aesthetic extends to lifestyle photography — the people, the places, and the moments a heritage wine sells through as much as the label itself.</p>
          <div className="flex flex-wrap gap-4">
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life1.jpg" alt="Man standing in a vineyard holding a wine bottle" className="flex-1 min-w-[260px] h-64 object-cover rounded-md" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life2.jpg" alt="Two men tasting wine in a vineyard" className="flex-1 min-w-[260px] h-64 object-cover rounded-md" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life3.jpg" alt="Woman tasting wine in a cellar" className="flex-1 min-w-[260px] h-64 object-cover rounded-md" />
          </div>
        </section>

        {/* WHY PORTUGAL */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">Why Portugal, Why Now</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
                Portugal has the story. Most isn't on camera<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Douro</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">The Original Demarcated Region</h3>
                <p className="text-sm text-black/60">Terraced slopes worked by hand for centuries — visually unlike anywhere else, and rarely shown as more than a postcard.</p>
              </div>
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Alentejo</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">Cork, Heat, and Scale</h3>
                <p className="text-sm text-black/60">Portugal's largest wine region, growing fast in export volume, with a landscape and pace of life barely used in its own marketing.</p>
              </div>
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Vinho Verde</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">Young, Coastal, Underestimated</h3>
                <p className="text-sm text-black/60">A wine and a region both fighting a dated reputation abroad — a rebrand opportunity as much as a content one.</p>
              </div>
            </div>
            <p className="text-sm text-black/70">Content in Portuguese and English, from one team and one voice — for the home market and export both.</p>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
              Four steps, no surprises<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          <div className="border-t border-black/10">
            {[
              ['01 Discover', "A call, plus a look at the vineyard, the archive, and existing materials — what's usable, and what's missing."],
              ['02 Concept', 'A look, a script, a reference reel. You see the story before a single frame is built.'],
              ['03 Craft', 'Animated film, live production, or campaign imagery — directed as one vision by one team, not stitched together from separate vendors.'],
              ['04 Deliver', 'Cut for the channels you actually use — site, social, trade, tasting room — in the languages your markets speak.'],
            ].map(([label, text]) => (
              <div key={label} className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-b border-black/10">
                <div className="md:w-40 flex-shrink-0 font-bold uppercase text-sm tracking-wide">{label}</div>
                <p className="text-sm text-black/70">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">What You Get</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
                Three ways to start<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 border border-black/5">
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Project</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">One Hero Film</h3>
                <p className="text-sm text-black/60">A single flagship piece built around your story — for a launch, a harvest, or an anniversary vintage.</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Retainer</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">A Content System</h3>
                <p className="text-sm text-black/60">An ongoing rhythm of film, animation, and campaign imagery for social, DTC, and trade — produced on a regular schedule, not a one-off.</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">Campaign</p>
                <h3 className="font-display font-bold uppercase text-lg mb-2">A Full Campaign</h3>
                <p className="text-sm text-black/60">Hero film, campaign imagery, and narrative direction together — building not just a launch, but a recognizable visual world.</p>
              </div>
            </div>
            <p className="text-sm text-black/60">Every project's different, so is the cost. Scopes and timelines are shaped around your winery — happy to talk specifics.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">Let's Talk</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
                Want to work with us<span className="text-red-600">?</span>
              </h2>
              <p className="text-white/70 mb-8">Reach out, and we'll work with you on something great.</p>
              <a href="mailto:hello@nustudios.co.uk" className="inline-flex items-center gap-2 text-red-500 font-bold border-b-2 border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors">
                Click here to email us <ExternalLink className="w-4 h-4" />
              </a>
              <p className="mt-10 text-sm text-white/50">
                Caroline &amp; Claudio —{' '}
                <a href="mailto:caroline@nustudios.co.uk" className="text-white font-bold border-b border-white/30">caroline@nustudios.co.uk</a>
                {' · '}
                <a href="mailto:claudio@nustudios.co.uk" className="text-white font-bold border-b border-white/30">claudio@nustudios.co.uk</a>
              </p>
            </div>
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/contact.jpg" alt="Wine bottle on a concrete plinth" className="w-full h-[420px] object-cover rounded-md" />
          </div>
        </section>

      </main>
    </div>
  );
};
