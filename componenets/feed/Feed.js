"use client"
import React, {useState ,useEffect} from 'react'
import { FcStackOfPhotos } from "react-icons/fc";
import { RecoilRoot } from 'recoil';
import ModalComponent from '../Modal/modal';

const Feed = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status ,setStatus] = useState('');
   const [onBtn, setOnBtn] = useState('')
 

  return (
    <div className=' space-x-6 pb-24 mt-4'>

      <div className='bg-white  p-3 space-y-3 border border-gray-300 rounded-[10px]'>
        <div className='flex item-center space-x-2'>
          <button onClick={() => setModalOpen(true)} className=' border-gray-800 border-2 text-black rounded-full px-4 py-3 shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 transition-all active:border-purple-400 '>New post</button>
          <div>
            <button  className='  group hover:bg-white border-2 ml-72 px-4  rounded-full align-middle shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 border-2xl   transition-all active:border-purple-400  border-black'>
              <FcStackOfPhotos size={25} className='ml-14' />
              <h4 className='  opacity-80 group-hover:opacity-100 '>
                Recommended Post
              </h4>
            </button>
          
          </div>
          <ModalComponent status={status} setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
            <div onBtn={onBtn} setOnBtn={setOnBtn}>
                   helo user !!
            </div>
      </div>

    </div>
  )
}

export default Feed;