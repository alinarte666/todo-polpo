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
			className={`w-full h-full relative flex flex-col flex-start ${
				!show ? 'md:justify-center gap-6' : 'md:justify-around gap-6'
			}  items-center overflow-auto`}>
			<nav className='w-[90%] justify-end items-center gap-6 mx-auto z-10 hidden md:flex'>
				<FiGlobe />
				<Btn children={!show ? 'Sign up' : 'Login'} action={changeView} />
				<Btn
					children='Request Demo'
					styles='p-1 bg-black text-white rounded-lg'
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
