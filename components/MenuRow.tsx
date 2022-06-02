import React, {SVGProps} from 'react'

interface Props { 
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function MenuRow({Icon, title, onClick}: Props) {
  return (
    <div 
      onClick={() => onClick?.()}
      className='group flex cursor-pointer max-w-fit
      items-center space-x-2 px-4 py-3
      rounded-full transition-all duration-200 hover:bg-gray-500'
    >
      <Icon className='h-6 w-6 group-hover:text-white' />
      <p className='hidden group-hover:text-white md:inline-flex 
      text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default MenuRow