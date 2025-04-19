const Hero = ({ heading, sub }) => {
  return (
    <div className='relative w-full h-[350px] overflow-hidden'>
      {/* Masonry Background */}
      <div className='absolute inset-0 grid grid-cols-4 gap-1'>
        <div className='grid gap-1'>
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/1sqIyoXPoindIetpSA4ZrT/1d27b6d049fe16e0bfd6943cd4d4e353/chimpanzee.jpg?w=800&h=450&fm=jpg&fl=progressive'
            alt='Chimpanzee'
            className='w-full h-[170px] object-cover rounded-sm'
          />
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/7MuHpS3ZODAgG9kOR9A90z/09f58ea10ce1043e1d99187693a2244b/uganda-golden-monkey.jpg?w=750&h=450&fm=jpg&fl=progressive'
            alt='Golden Monkey in Rwanda'
            className='w-full h-[180px] object-cover rounded-sm'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/3u3vx1VmdZ2IPHuAi71uD6/073cead2ca20cbff399d8c405e8339fc/Nakuru.jpg?w=640&h=427&fm=jpg&fl=progressive'
            alt='Lake Nakuru'
            className='w-full h-[220px] object-cover rounded-sm'
          />
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/D90honCWvEP4KUV82EO1r/bc28b3404d9278f795f5f74f1576e2aa/Mara.jpg?w=640&h=427&fm=jpg&fl=progressive'
            alt='Maasai Mara'
            className='w-full h-[130px] object-cover rounded-sm'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/6GFicKthut49pcvHyWueAU/5872d6f2ebceaa72bda04a23f0d7cfd7/bwindi_gorilla.jpg?w=1920&h=1503&fm=jpg&fl=progressive'
            alt='Mountain Gorilla in Bwindi'
            className='w-full h-[150px] object-cover rounded-sm'
          />
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/59fQJ4qa1dCEsZmr62CpqX/57e4ad9cd9f27e7c3b702f9638c043c9/giraffe_murchision.jpg?w=1080&h=721&fm=jpg&fl=progressive'
            alt='Giraffe in Murchison Falls'
            className='w-full h-[200px] object-cover rounded-sm'
          />
        </div>
        <div className='grid gap-1'>
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/2fydVAZeIT9I1JRJM0GyKQ/740e24744bffecede023f1ae5d2e3141/impala_lake_mburo.jpg?w=1920&h=1280&fm=jpg&fl=progressive'
            alt='Impala in Lake Mburo'
            className='w-full h-[180px] object-cover rounded-sm'
          />
          <img
            src='https://images.ctfassets.net/4uh13bd20zjq/VIK94LoqQbQEtKR5MDarV/86aed5f208320bc5e9f18ca1fd20e5ab/lion-in-queen-elizabeth-national-park.jpg?w=850&h=500&fm=jpg&fl=progressive'
            alt='Lion in Queen Elizabeth National Park'
            className='w-full h-[170px] object-cover rounded-sm'
          />
        </div>
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white drop-shadow-lg'>
          {heading}
          {/* Discover African Adventures */}
        </h2>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md'>
          {sub}
          {/* Embark on unforgettable journeys through the heart of East Africa */}
        </p>
      </div>
    </div>
  )
}

export default Hero
