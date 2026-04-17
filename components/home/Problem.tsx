export default function Problem() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100" style={{ minHeight: '520px' }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="relative flex h-full w-full flex-col items-center justify-end px-4 pb-10 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
          THE PROBLEM
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          The greatest barrier to spreading the Gospel is not the mission — it is funding.
        </h2>
        <p className="mt-4 max-w-3xl text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
          We carry the funding burden so mission leaders can stay focused on prayer, ministry, and evangelism.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black opacity-60" />
    </section>
  )
}
