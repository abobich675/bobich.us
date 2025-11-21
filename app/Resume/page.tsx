export default function Page() {
  return(
  <div className='px-10 xl:px-50 pt-20 w-full'>
    <div className="text-4xl pb-5"> My Resume </div>
    <div className="text-xl">
      My Resume is available for <a href='AdamBobich_Resume.pdf' download className='text-(--accent-color) hover:text-[#8855f0]'><u>download as a pdf</u></a>.
    </div>
  </div>
  )
}