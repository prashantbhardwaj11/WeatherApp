import React from 'react';

export default function WeatherWidget(props) {
	return (
		<div className="ml-auto mt" style={{ height: '60vh' }}>
			<div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
				<div className="flex justify-between space-x-8">
					<div className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
						>
							<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
							<rect width="32" height="48" x="240" y="16"></rect>
							<rect width="32" height="48" x="240" y="448"></rect>
							<rect width="48" height="32" x="448" y="240"></rect>
							<rect width="48" height="32" x="16" y="240"></rect>
							<rect
								width="32"
								height="45.255"
								x="400"
								y="393.373"
								transform="rotate(-45 416 416)"
							></rect>
							<rect
								width="32.001"
								height="45.255"
								x="80"
								y="73.373"
								transform="rotate(-45 96 96)"
							></rect>
							<rect
								width="45.255"
								height="32"
								x="73.373"
								y="400"
								transform="rotate(-45.001 96.002 416.003)"
							></rect>
							<rect
								width="45.255"
								height="32.001"
								x="393.373"
								y="80"
								transform="rotate(-45 416 96)"
							></rect>
						</svg>
						<h1 className="text-xl font-semibold">{props.name}</h1>
					</div>
					<span className="font-bold text-7xl mt-4">{props.temp}°c</span>
				</div>
				<div className="text-end">
					<span>{props.mydate}</span>
				</div>
				<div className="text-end">
					<span>{props.mytime}</span>
				</div>
				<div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
					<div className="flex flex-col items-center space-y-1">
						<span className="">Min Temp</span>

						<span>{props.min}°</span>
					</div>
					<div className="flex flex-col items-center space-y-1">
						<span className="">Max Temp</span>

						<span>{props.max}°</span>
					</div>
					<div className="flex flex-col items-center space-y-1">
						<span className="">Humidity</span>

						<span>{props.humidity}%</span>
					</div>
					<div className="flex flex-col items-center space-y-1">
						<span className="">Visibility</span>

						<span>{props.visibility}M</span>
					</div>
				</div>
			</div>
		</div>
	);
}
