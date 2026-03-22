import { auth, signOut } from '@/auth'
import ROUTES from '@/constants/routes';
import React from 'react'

const HomePage = async () => {
  const session = await auth();
  console.log(session)

  return (
    <>
      <form className="px-10 pt-25" action={async () => {
        "use server";

        await signOut({redirectTo: ROUTES.SIGN_IN})
      }}>
      </form>
      <h1>Welcome</h1>
    </>
  )
}

export default HomePage