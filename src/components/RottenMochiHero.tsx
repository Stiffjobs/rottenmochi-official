import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Check, Gamepad2, BrainCircuit } from 'lucide-react';

export default function RottenMochiHero() {
	return (
		<section className="relative min-h-[90vh] w-full overflow-hidden bg-cream bg-dot-pattern flex flex-col items-center justify-center pt-20">
			{/* --- Central Content --- */}
			<div className="z-30 text-center max-w-4xl px-4 flex flex-col items-center gap-6">
				{/* The "Mochi" AI Logo */}
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, type: 'spring' }}
					className="bg-white p-2 rounded-[2rem] shadow-2xl mb-2 "
				>
					{/* Simple CSS Mochi Face */}
					<img src="/icon.jpeg" alt="Mochi" width={100} height={100} />
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
				>
					Screen time is fine. <br />
					<span className="text-rose-500">Only when the job is done.</span>
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto"
				>
					Meet <span className="font-bold text-rose-500">Rotten Mochi</span>.
					The AI coach that verifies your kid's chores & homework before
					unlocking their device.
				</motion.p>

				{/* Buttons */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="flex gap-4"
				>
					<Button
						size="lg"
						className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-lg shadow-rose-200 shadow-lg cursor-pointer"
						asChild
					>
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLScWfyOaA0op03VUN1SvKlS9LBWzayWvQj6aeO6dLkDJa9_uDg/viewform?usp=dialog"
							target="_blank"
							rel="noopener noreferrer"
						>
							Join Waitlist
						</a>
					</Button>
				</motion.div>
			</div>

			{/* --- Floating Elements (Storytelling) --- */}

			{/* Top Left: The Kid's Request (Sticky Note) */}
			<motion.div
				animate={{ y: [0, -15, 0], rotate: [-6, -4, -6] }}
				transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute top-[12%] left-[5%] md:left-[10%] w-60 z-20 hidden md:block"
			>
				<div className="bg-[#FEF9C3] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm relative text-xl text-slate-800 font-caveat -rotate-6">
					<div className="absolute -top-3 left-1/2 w-4 h-4 bg-rose-400 rounded-full shadow-md opacity-80"></div>
					"Dad! I finished the math worksheet! Unlock the iPad plzzz"
				</div>
			</motion.div>

			{/* Top Right: The AI Verification (The "Coach") */}
			<motion.div
				animate={{ y: [0, -12, 0] }}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 0.5,
				}}
				className="absolute top-[20%] right-[5%] md:right-[8%] w-72 z-20 hidden md:block"
			>
				<Card className="bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-4 border-slate-100">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-rose-100 p-2 rounded-full">
							<BrainCircuit className="w-5 h-5 text-rose-500" />
						</div>
						<div>
							<p className="text-sm font-bold text-slate-800">AI Analysis</p>
							<p className="text-xs text-green-600 font-medium">
								Verification Complete
							</p>
						</div>
					</div>
					<div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 space-y-2">
						<div className="flex items-center gap-2">
							<Check size={14} className="text-green-500" />
							<span>Handwriting detected</span>
						</div>
						<div className="flex items-center gap-2">
							<Check size={14} className="text-green-500" />
							<span>5 Math problems solved</span>
						</div>
						<div className="flex items-center gap-2">
							<Check size={14} className="text-green-500" />
							<span>Room looks tidy</span>
						</div>
					</div>
				</Card>
			</motion.div>

			{/* Bottom Left: The Reward (Screen Time Unlocked) */}
			<motion.div
				animate={{ y: [0, -8, 0] }}
				transition={{
					duration: 5.5,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				className="absolute bottom-[10%] left-[5%] md:left-[15%] w-64 z-10 hidden md:block"
			>
				<Card className="bg-white shadow-xl rounded-2xl p-5 border-slate-100 rotate-3">
					<div className="flex justify-between items-center mb-4">
						<h4 className="font-semibold text-slate-800">iPad Status</h4>
						<Badge className="bg-green-100 text-green-700 hover:bg-green-100 shadow-none">
							UNLOCKED
						</Badge>
					</div>
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-md">
							<Gamepad2 size={24} />
						</div>
						<div>
							<p className="text-sm font-medium">Roblox</p>
							<p className="text-xs text-slate-400">30 min limit set</p>
						</div>
					</div>
				</Card>
			</motion.div>
		</section>
	);
}
