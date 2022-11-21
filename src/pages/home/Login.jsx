import { Btn } from '../../components/Btn'
import { Formu } from '../../components/Formu'

import woman from '../../assets/woman.svg'
import { FaGoogle, BsApple, BsFacebook } from 'react-icons/all'
import Inputcito from '../../components/Inputcito'
import { Info } from '../../components/Info'

export const Login = ({ changeView }) => {
	return (
		<Formu
			styleD='h-auto landscape:h-auto py-6 mt-8 md:h-3/4 w-[90%] flex justify-center items-center rounded-2xl border bg-white max-w-[450px] relative'
			styleF='w-full h-full md:h-auto] md:w-[90%] bg-transparent flex flex-col justify-center md:justify-evenly items-center gap-4'>
			<div className='w-full flex flex-col items-center gap-2 z-10'>
				<h1 className='font-bold text-3xl'>Agent Login</h1>
				<p className='w-[64%] text-center'>
					Hey, Enter your details to get sign in to your account.
				</p>
			</div>
			<div className='w-[75%] flex flex-col gap-4 z-10'>
				<Inputcito type='text' desc='Enter Email/Phone No' />
				<Inputcito type='password' desc='Passcode' />
			</div>
			<div className='md:w-[75%] grid grid-cols-3 gap-y-4 z-10'>
				<p className='font-semibold col-span-3 md:col-span-3 w-[80%] mx-auto text-center md:text-left md:w-full'>
					Having trouble in sign in?
				</p>
				<Btn
					children='Sign in'
					styles='w-[70%] mx-auto md:w-full col-span-3 font-bold bg-black text-white py-1 rounded-md transition linear hover:scale-110'
				/>
				<span
					className='relative min-w-[250px] col-span-3 text-center  before:content-[""] before:top-[0.7em] after:left-[11.6em] md:after:left-[75%] before:right-[11.6em] md:before:right-[75%] after:top-[0.7em]  before:absolute before:w-[40px] md:before:w-[80px] before:h-[2px] before:bg-gray-500
                    after:content-[""] after:absolute after:w-[40px] md:after:w-[80px] after:h-[2px] after:bg-gray-500 cursor-pointer'>
					Or Sign in with
				</span>
				<div className='col-span-3 flex flex-wrap justify-center gap-2 text-sm md:text-base'>
					<Btn styles='text-black flex items-center gap-1 md:gap-2 border-2 border-gray-300 rounded-md px-1'>
						<FaGoogle /> Google
					</Btn>
					<Btn styles='text-black flex items-center gap-1 md:gap-2 border-2 border-gray-300 rounded-md px-1'>
						<BsApple /> Apple ID
					</Btn>
					<Btn styles='text-black flex items-center gap-1 md:gap-2 border-2 border-gray-300 rounded-md px-1'>
						<BsFacebook /> Facebook
					</Btn>
				</div>
			</div>
			<Info
				styleP='col-span-3 text-md w-[80%] text-center md:text-left md:w-auto z-10'
				action={changeView}
				contentP="Don't have an account? "
				contentS='Request Now'
			/>
			<img
				src={woman}
				className='absolute w-[600px] h-[600px] object-cover -right-64 md:left-60 -z-1 hidden md:block drop-shadow-lg'
			/>
		</Formu>
	)
}
