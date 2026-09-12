const services = [
  {
    title: "Anxiety & Panic Therapy",
    text: "Support for adults experiencing persistent worry, panic, overthinking, tension, difficulty sleeping, and the emotional exhaustion that can come with constant pressure.",
  },
  {
    title: "Trauma & EMDR Therapy",
    text: "Carefully paced trauma work focused on safety, stabilization, and helping you feel more grounded and regulated in everyday life.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Support for professionals, entrepreneurs, and creatives who feel exhausted, disconnected, or caught in a cycle of high internal pressure.",
  },
];

const people = [
  {
    title: "Adults",
    text: "Therapy for adults navigating anxiety, stress, panic, trauma, and the effects of difficult past experiences.",
    image: "/office-1.jpg",
  },
  {
    title: "Professionals",
    text: "Support for professionals and high-achieving adults who feel overwhelmed by constant pressure, perfectionism, or burnout.",
    image: "/office-2.jpg",
  },
  {
    title: "Entrepreneurs & Creatives",
    text: "A space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
    image: "/office-1.jpg",
  },
];

const expertise = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Stress",
  "CBT",
  "EMDR",
  "Mindfulness",
  "Body-Oriented Techniques",
];

const specialties = [
  {
    title: "Trauma",
    text: "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life.",
  },
  {
    title: "Anxiety & Panic",
    text: "Therapy can help you understand patterns of worry, tension, overthinking, panic, and the emotional and physiological effects of chronic stress.",
  },
  {
    title: "EMDR",
    text: "EMDR is one of the evidence-based approaches integrated into therapy to support clients working through traumatic experiences.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Therapy can help you step out of cycles of high internal pressure and develop more sustainable ways of living and working.",
  },
];

const faqs = [
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. Dr. Maya Reynolds offers in-person therapy from her Santa Monica office.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Secure telehealth sessions are available for clients located in California.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "Dr. Maya Reynolds integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "The practice focuses on adults, including professionals, entrepreneurs, and creatives who may be navigating anxiety, trauma, burnout, perfectionism, or high internal pressure.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#263B35]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#D9CEC2]/70 bg-[#F7F3EE]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <a href="#" className="shrink-0">
            <p className="text-lg font-semibold tracking-tight md:text-xl">
              Dr. Maya Reynolds
            </p>

            <p className="text-xs text-[#65756F] md:text-sm">
              Licensed Clinical Psychologist, PsyD
            </p>
          </a>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#about" className="transition hover:text-[#A56B52]">
              About
            </a>

            <a href="#services" className="transition hover:text-[#A56B52]">
              Services
            </a>

            <a href="#office" className="transition hover:text-[#A56B52]">
              Our Office
            </a>

            <a href="#faq" className="transition hover:text-[#A56B52]">
              FAQs
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#A56B52] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8F5942]"
          >
            Book a Consultation
          </a>
        </div>
      </header>


      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-8 md:py-20 lg:py-24">

        <div className="max-w-2xl">

          <p className="mb-3 text-base font-medium text-[#65756F] md:text-lg">
            Dr. Maya Reynolds, PsyD
          </p>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#A56B52] md:text-sm">
            Therapy in Santa Monica, California
          </p>

          <h1 className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-[56px] lg:text-[62px]">
            A calmer way forward starts with feeling understood.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
            Warm, collaborative therapy for adults navigating anxiety,
            panic, trauma, burnout, and the pressure of a fast-paced life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#contact"
              className="rounded-full bg-[#A56B52] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#8F5942]"
            >
              Schedule a Consultation
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#A56B52] px-6 py-3.5 text-sm font-medium text-[#A56B52] transition hover:bg-[#A56B52] hover:text-white"
            >
              Learn About My Approach
            </a>

          </div>
        </div>


        <div className="relative mx-auto w-full max-w-[470px] md:ml-auto">

          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#E8C8B8]/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] bg-[#E9E1D8] shadow-[0_20px_60px_rgba(49,72,63,0.12)]">

            <img
              src="/maya.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              className="h-[430px] w-full object-cover object-top sm:h-[480px] md:h-[540px]"
            />

          </div>

          <div className="absolute -bottom-4 right-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-5">

            <p className="text-sm font-semibold text-[#31483F]">
              Santa Monica, California
            </p>

            <p className="mt-1 text-xs text-[#65756F]">
              In-person & secure telehealth
            </p>

          </div>
        </div>

      </section>


      {/* ABOUT / INTRO */}
      <section
        id="about"
        className="bg-[#E9E1D8] px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
              A space to slow down
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              You can look like you are doing fine and still feel exhausted inside.
            </h2>
          </div>

          <div>

            <p className="text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
              I’m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p className="mt-5 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
              Many of the people I work with are high-achieving, thoughtful,
              and self-aware—but internally feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>

            <a
              href="#services"
              className="mt-7 inline-block font-medium text-[#A56B52]"
            >
              Explore how I can help →
            </a>

          </div>

        </div>
      </section>


      {/* WHO I HELP */}
      <section className="px-5 py-20 md:px-8 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
              Who I work with
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              Support for adults carrying more than they let others see.
            </h2>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {people.map((person) => (
              <article
                key={person.title}
                className="overflow-hidden rounded-[24px] bg-[#E9E1D8]"
              >

                <img
                  src={person.image}
                  alt={person.title}
                  className="h-[240px] w-full object-cover"
                />

                <div className="p-7">

                  <h3 className="text-xl font-medium md:text-2xl">
                    {person.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#65756F] md:text-base">
                    {person.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* EXPERTISE */}
      <section className="bg-[#31483F] px-5 py-20 text-white md:px-8 md:py-24">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C8B8] md:text-sm">
            Areas of expertise
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            You deserve a place where your story is heard, valued, and understood.
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 px-4 py-2.5 text-sm text-white/95"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* HOW WE WORK */}
      <section className="px-5 py-20 md:px-8 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

          <div className="overflow-hidden rounded-[28px]">

            <img
              src="/office-2.jpg"
              alt="Calm therapy office"
              className="h-[380px] w-full object-cover sm:h-[460px] md:h-[520px]"
            />

          </div>


          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              Practical tools with room for deeper healing.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
              I take a warm, collaborative, and grounded approach to therapy.
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection and depth.
            </p>

            <p className="mt-5 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
              I integrate evidence-based methods such as cognitive-behavioral
              therapy (CBT), EMDR, mindfulness-based practices, and
              body-oriented techniques.
            </p>

            <p className="mt-5 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
              Trauma work is paced carefully, with an emphasis on safety,
              stabilization, and helping clients feel more regulated in their
              daily lives.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#E9E1D8] px-5 py-20 md:px-8 md:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
            Services
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Care designed around what you are experiencing.
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[24px] bg-[#F7F3EE] p-7 shadow-sm md:p-8"
              >

                <div className="mb-6 h-10 w-10 rounded-full bg-[#E8C8B8]" />

                <h3 className="text-xl font-medium md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#65756F] md:text-base">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-medium text-[#A56B52]"
                >
                  Learn more →
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* SPECIALTIES */}
      <section className="px-5 py-20 md:px-8 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
                My specialties
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Helping you understand what is keeping you stuck.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#65756F] md:text-lg">
                Therapy can be a place to process what has happened, understand
                what you are experiencing, and develop a stronger relationship
                with yourself over time.
              </p>

            </div>


            <div className="space-y-0">

              {specialties.map((item, index) => (
                <article
                  key={item.title}
                  className="border-t border-[#D9CEC2] py-7"
                >

                  <div className="flex gap-6">

                    <span className="text-sm text-[#A56B52]">
                      0{index + 1}
                    </span>

                    <div>

                      <h3 className="text-xl font-medium md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#65756F] md:text-base">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* OUR OFFICE - NEW CUSTOM SECTION */}
      <section
        id="office"
        className="bg-[#E9E1D8] px-5 py-20 md:px-8 md:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
                Our Office
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                A calm, private space for meaningful work.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
                My Santa Monica office is a quiet, private space designed to
                feel calm and grounding, with natural light and a comfortable,
                uncluttered environment.
              </p>

              <p className="mt-5 text-base leading-7 text-[#65756F] md:text-lg md:leading-8">
                Clients can choose in-person therapy from the Santa Monica
                office or secure telehealth sessions if they are located in
                California.
              </p>

              <div className="mt-7 rounded-[20px] border border-[#D9CEC2] bg-[#F7F3EE] p-6">

                <p className="font-medium text-[#31483F]">
                  Santa Monica, California
                </p>

                <p className="mt-2 text-sm leading-6 text-[#65756F]">
                  123th Street 45 W
                  <br />
                  Santa Monica, CA 90401
                </p>

              </div>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <div className="overflow-hidden rounded-[24px]">
                <img
                  src="/office-1.jpg"
                  alt="Therapy office seating area"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] sm:mt-12">
                <img
                  src="/office-2.jpg"
                  alt="Bright private therapy room"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* APPOINTMENT CTA */}
      <section
        id="contact"
        className="bg-[#31483F] px-5 py-20 text-white md:px-8 md:py-28"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_auto]">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C8B8] md:text-sm">
              Schedule an appointment
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              You do not have to figure everything out on your own.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              If you are looking for a therapist who combines practical tools
              with depth-oriented work, I may be a good fit.
            </p>

          </div>

          <a
            href="#faq"
            className="inline-flex w-fit rounded-full bg-[#E8C8B8] px-7 py-4 text-sm font-medium text-[#31483F] transition hover:bg-white"
          >
            Book a Consultation
          </a>

        </div>

      </section>


      {/* FAQ */}
      <section
        id="faq"
        className="px-5 py-20 md:px-8 md:py-28"
      >

        <div className="mx-auto max-w-4xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56B52] md:text-sm">
            FAQs
          </p>

          <h2 className="mt-4 text-3xl font-medium sm:text-4xl md:text-5xl">
            Questions you may have
          </h2>


          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#D9CEC2] bg-white/40 p-5 md:p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">

                  <span>{faq.question}</span>

                  <span className="text-xl text-[#A56B52] transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#65756F] md:text-base">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#D9CEC2] bg-[#F7F3EE] px-5 py-10 md:px-8">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

          <div>

            <p className="font-semibold text-[#263B35]">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-2 text-sm text-[#65756F]">
              Licensed Clinical Psychologist
            </p>

          </div>


          <div>

            <p className="text-sm font-medium text-[#263B35]">
              Practice
            </p>

            <div className="mt-3 space-y-2 text-sm text-[#65756F]">

              <a href="#about" className="block hover:text-[#A56B52]">
                About
              </a>

              <a href="#services" className="block hover:text-[#A56B52]">
                Services
              </a>

              <a href="#office" className="block hover:text-[#A56B52]">
                Our Office
              </a>

              <a href="#faq" className="block hover:text-[#A56B52]">
                FAQs
              </a>

            </div>

          </div>


          <div>

            <p className="text-sm font-medium text-[#263B35]">
              Location
            </p>

            <p className="mt-3 text-sm leading-6 text-[#65756F]">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
              <br />
              California
            </p>

          </div>

        </div>


        <div className="mx-auto mt-8 max-w-7xl border-t border-[#D9CEC2] pt-6">

          <p className="text-xs text-[#65756F]">
            © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}