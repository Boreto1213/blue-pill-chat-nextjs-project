'use client'

import Button from '@/components/ui/Button'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { FC } from 'react'

const Page: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    try {
      setIsLoading(true)

      await signIn('google')
    } catch (error) {
      // display error message
      toast.error('Something went wrong with your login!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-full items-center h-screen justify-evenly py-12 px-4 sm:px-6 lg:px-8">
      <svg
        height="750px"
        width="750px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.964 511.964"
        xmlSpace="preserve"
      >
        <path
          style={{ fill: '#F5F7FA' }}
          d="M106.658,501.292c-25.639,0-49.746-9.983-67.869-28.107c-37.436-37.435-37.436-98.336,0-135.771
	L337.421,38.78c18.156-18.124,42.248-28.123,67.902-28.123c25.623,0,49.746,9.999,67.869,28.123
	c18.123,18.124,28.123,42.247,28.123,67.87c0,25.654-10,49.746-28.123,67.886L174.544,473.184
	C156.404,491.308,132.296,501.292,106.658,501.292z"
        />
        <path
          style={{ fill: '#E6E9ED' }}
          d="M480.724,31.233c-20.811-20.827-48.121-31.232-75.4-31.232c-27.311,0-54.59,10.405-75.432,31.232
	l-298.65,298.65c-41.652,41.652-41.652,109.179,0,150.832c20.826,20.826,48.121,31.247,75.416,31.247s54.59-10.421,75.416-31.247
	l298.65-298.635C522.377,140.428,522.377,72.886,480.724,31.233z M465.662,166.989L166.998,465.638
	c-16.123,16.108-37.545,24.982-60.34,24.982s-44.215-8.874-60.338-24.982c-16.109-16.108-24.982-37.544-24.982-60.339
	c0-22.796,8.873-44.216,24.982-60.324L344.984,46.31c16.123-16.108,37.529-24.982,60.34-24.982c22.779,0,44.215,8.875,60.338,24.982
	c16.094,16.124,24.967,37.56,24.967,60.339C490.628,129.444,481.755,150.865,465.662,166.989z"
        />
        <path
          style={{ fill: '#ED5564' }}
          d="M250.945,261.012c-23.107-23.092-43.154-48.434-60.027-75.713L38.789,337.413
	c-37.436,37.436-37.436,98.337,0,135.771c18.123,18.124,42.23,28.107,67.869,28.107s49.746-9.983,67.887-28.107l152.129-152.145
	C299.394,304.166,274.052,284.121,250.945,261.012z"
        />
        <path
          style={{ fill: '#DA4453' }}
          d="M166.998,465.638c-16.123,16.108-37.545,24.982-60.34,24.982s-44.215-8.874-60.338-24.982
	c-16.109-16.108-24.982-37.544-24.982-60.339c0-22.796,8.873-44.216,24.982-60.324l150.457-150.457
	c-4-6.125-7.859-12.328-11.531-18.655l-46.168,46.185L31.226,329.899c-41.637,41.652-41.637,109.163,0.016,150.816
	c20.826,20.826,48.121,31.247,75.416,31.247s54.59-10.421,75.416-31.247l154.035-154.004c-6.342-3.672-12.529-7.516-18.654-11.531
	L166.998,465.638z"
        />
      </svg>
      <div className="w-full flex flex-col items-center max-w-lg space-y-8 shadow-[3px_20px_30px_-15px_rgba(0,0,0,0.3)] py-16 px-12 rounded-xl border border-gray-100">
        <div className="flex flex-col items-center gap-8">
          <div className="font-bold text-7xl">
            <span className="text-red-600">Red</span>
            <span className="text-slate-300">PillChat</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Button
          isLoading={isLoading}
          type="button"
          className="max-w-sm mx-auto w-full"
          onClick={loginWithGoogle}
        >
          {isLoading ? null : (
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
          )}{' '}
          Google
        </Button>
      </div>
    </div>
  )
}

export default Page
