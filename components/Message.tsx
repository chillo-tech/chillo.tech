import React from 'react'

type Params = {
	type: string,
	firstMessage: string,
	secondMessage: string,
	actionLabel?: string,
  
	action?: (event: any) => void,
}

const classByType = (type: string) => {
	if (type === 'error') {
		return 'text-red-600 border-rose-600'
	}
	if (type === 'success') {
		return 'text-green-600 border-green-600'
	}
	if (type === 'loading') {
		return 'text-green-600 border-green-600'
	}
}

function Message({type, firstMessage, secondMessage, actionLabel, action}: Params) {
	return (
		<div className='text-center flex flex-col justify-center items-center h-80'>
			<h2 className={`text-lg text-center ${classByType(type)}`}>{firstMessage}</h2>
			<div className={`text-lg text-center my-5 ${classByType(type)}`}>{secondMessage}</div>
			{
				action && actionLabel ? (
					<button
						type='button'
						className={`border w-auto px-5 py-2 rounded-lg ${classByType(type)}`}
						onClick={action}
					>
						{actionLabel}
					</button>
				) : null
			}

		</div>
	)
}

export default Message
