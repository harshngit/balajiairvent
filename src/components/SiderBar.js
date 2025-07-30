import React from 'react'

const SiderBar = ({ open, setOpen }) => {
	return (
		<>
			{/* Overlay */}
			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
				/>
			)}

			{/* Sidebar */}
			<div
				className={`
          fixed z-50 bg-white transition-transform duration-300 shadow-xl
          w-full sm:w-[400px] h-[85vh] sm:h-full
          bottom-0 sm:bottom-auto sm:right-0
          ${open ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full"}
        `}
			>
				<div className="flex justify-between items-center p-4 border-b">
					<h2 className="text-lg font-semibold">Your personalised door consultation</h2>
					<button onClick={() => setOpen(false)}>
						{/* <X className="w-6 h-6" /> */}
					</button>
				</div>

				{/* Sidebar content */}
				<div className="p-6 space-y-4">
					<ul className="space-y-2 text-sm">
						<li>✅ Submit your request</li>
						<li>✅ Get matched with an expert</li>
						<li>✅ 1-on-1 consultation</li>
						<li>✅ Bring your vision to life</li>
					</ul>
					<button className="bg-black text-white px-4 py-2 rounded">
						Submit Request
					</button>
				</div>
			</div>
		</>
	)
}

export default SiderBar