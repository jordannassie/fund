export default function Problem() {
  return (
    <section
      className="relative overflow-hidden border-b border-zinc-100"
      style={{ minHeight: '360px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/problem-section.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="relative flex h-full w-full flex-col items-center justify-center px-4 py-10 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
          THE PROBLEM
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          The greatest barrier to spreading the Gospel is not the mission — it is funding.
        </h2>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
    </section>
  )
}
