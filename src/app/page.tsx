import Image from "next/image";

export default function Home() {
  return (
    <main className="temporary-home">
      <div className="drafting-lines" aria-hidden="true" />
      <section className="temporary-home__content" aria-labelledby="page-title">
        <div className="temporary-home__identity">
          <Image
            src="/iia-tc-seal.png"
            alt="The Indian Institute of Architects, Telangana Chapter"
            width={180}
            height={180}
            priority
            className="temporary-home__seal"
          />
          <p className="temporary-home__name">
            The Indian Institute of Architects
            <span>Telangana Chapter</span>
          </p>
        </div>

        <div className="temporary-home__rule" aria-hidden="true" />

        <h1 id="page-title">
          Shaping Spaces. Connecting Minds. Inspiring the Future.
        </h1>

        <p className="temporary-home__message">
          We are creating a more engaging digital home for the architectural
          community of Telangana — a space to connect, collaborate, share ideas
          and celebrate excellence in architecture.
        </p>

        <p className="temporary-home__closing">
          A renewed digital experience is taking shape.
        </p>
      </section>
    </main>
  );
}
