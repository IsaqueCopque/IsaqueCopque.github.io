const BannerSection = () => (
  <section id="me" style={{backgroundColor: 'var(--raisin-black)'}} className="pt-4 pb-6 mb-6">
      <div className='flex flex-col justify-center align-center items-center gap-2'>

          <img className="w-48 h-48 rounded-full" style={{borderRadius: "50%"}}
            src="/me.jpg" 
            alt="Profile"/>

        <div className="text-slate-100 font-caveat">
          <p className="text-5xl">Hi, I'm</p>
          <p className="text-7xl pl-4"><span className='text-green-400'>Isaque Copque!</span></p>
        </div>
      </div>
  </section>
);

export default BannerSection;