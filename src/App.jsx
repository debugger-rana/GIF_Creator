


import Random from './components/Random'
import Tag from './components/Tag'

function App() {
 

  return (
    <div className='w-full h-full flex flex-col background relative overfow-x-hidden items-center'>
     <div className='bg-white rounded-lg w-11/12 text-center mt-[40px]
      px-10 py-2 text-4xl font-bold'>RANDOM GIF</div>
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tag/>
     </div>
    </div>
  )
}

export default App
