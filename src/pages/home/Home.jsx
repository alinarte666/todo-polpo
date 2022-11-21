import React from 'react'
import { FiGlobe } from 'react-icons/all'
import { Btn } from '../../components/Btn'
import { Login } from './Login'
import { SigUp } from './SigUp'

export const Home = () => {
	const [show, setShow] = React.useState(false)
	const changeView = () => setShow(!show)
	return (
		<div
			className={`w-full h-screen bg-transparent overflow-y-auto overflow-x-hidden landscape:h-auto relative flex flex-col justify-start ${
				!show ? 'md:justify-around gap-6' : 'md:justify-around gap-6'
			}  items-center`}>
			<nav className='w-[90%] justify-end items-center gap-6  mx-auto z-10 hidden md:flex pt-2'>
				<FiGlobe />
				<Btn children={!show ? 'Sign up' : 'Login'} action={changeView} />
				<Btn
					children='Request Demo'
					styles='py-1 px-2 text-center font-semibold bg-black text-white rounded-lg transition linear hover:scale-110'
				/>
			</nav>
			{show ? (
				<SigUp changeView={changeView} />
			) : (
				<Login changeView={changeView} />
			)}
			<span className='font-light text-xs md:text-lg tracking-wide pb-4 text-center'>
				Copyright <span className='font-semibold'>@polpocr</span> 2022 | Privacy
				Policy
			</span>
		</div>
	)
}
