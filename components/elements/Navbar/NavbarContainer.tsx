import React from 'react'
import { useRouter } from 'next/router'
import { NavbarContainerProps } from './interface'

const NavbarContainer = ({ children, isScroll }: NavbarContainerProps) => {
  const { pathname } = useRouter()
  const isMart = pathname.includes('/mart')

  const wrapperPadding = !isScroll || isMart ? 'py-0' : 'lg:py-4 lg:px-8'
  const smallJaggedWidth = !isScroll || isMart ? 'w-full' : 'lg:w-[calc(100%)] w-full'
  const mediumJaggedWidth = !isScroll || isMart ? 'w-full' : 'lg:w-[calc(100%+15px)] w-full'
  const largeJaggedWidth = !isScroll || isMart ? 'w-full' : 'lg:w-[calc(100%+30px)] w-full'

  return (
    <nav
      className={`${wrapperPadding} flex flex-col w-full justify-center items-center transition-200-ease-in-out min-w-full`}
    >
      <div
        className={`${smallJaggedWidth} jagged-navbar transition-200-ease-in-out bg-surface`}
      ></div>
      <div
        className={`${mediumJaggedWidth} jagged-navbar transition-200-ease-in-out bg-surface`}
      ></div>
      <div
        className={`${largeJaggedWidth} grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 bg-surface transition-200-ease-in-out md:py-0`}
      >
        {children}
      </div>
      <div
        className={`${mediumJaggedWidth} jagged-navbar transition-200-ease-in-out bg-surface`}
      ></div>
      <div
        className={`${smallJaggedWidth} jagged-navbar transition-200-ease-in-out bg-surface`}
      ></div>
    </nav>
  )
}

export default NavbarContainer
