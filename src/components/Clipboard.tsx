import React from 'react'

const Clipboard = ({ title, children }: { title: string; children: any }) => {
  return (
    <div className={'h-full w-full rounded-lg  bg-amber-400 px-2 pb-2'}>
      <div className={'pb-1 text-center underline'}>{title}</div>
      <div className={'rounded-md bg-stone-100 p-2'}>{children}</div>
    </div>
  )
}

export default Clipboard
