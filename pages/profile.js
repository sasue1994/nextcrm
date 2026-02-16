import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Profile() {
  const [profile, setProfile] = useState({})

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    setProfile(profile)
  }, [profile.userId])

  return (
    <section>

    </section>
  )
}