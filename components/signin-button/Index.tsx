import Link from 'next/link'
import React from 'react'

interface Params {
  link: string,
  label: string
}
function SigninButton({link, label}: Params) {
  return (
    <div className="inscription text-center">
      <Link href={link} className="rounded-lg bg-blue-200 border-2 border-blue-700 font-extralight px-3 py-2 text-xl">
          {label}
      </Link>
    </div>
  )
}

export default SigninButton