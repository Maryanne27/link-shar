'use client'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { useRouter } from "next/navigation";

// import Footer from '../../components/footer/Footer'
import Links from './components/Links'
import Profile from './components/Profile'
import Header from '../components/Header'
import ProfilePreview from '../components/Preview';

// import ProfilePreview from '../../components/profilePreview/ProfilePreview'
// import Phone from '../../assets/Phone'

export default function page() {
    const { user } = useContext(AuthContext)
    const [page, setPage] = useState('links')
    const router = useRouter()

    useEffect(() => {
        const sessionUser = sessionStorage.getItem('user');
        if (!sessionUser && !user) {
            router.push('/home'); 
        }
    }, [user, router]);

    return (
        <>
            <Header page={page} setPage={setPage} />

            <main className="flex flex-col items-center justify-center py-6">
                <section className="relative w-full max-w-md">
                    <div className="relative flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
                        {/* <ProfilePreview bare /> */}
                    </div>
                </section>

                {page === 'links' ? <Links /> : <Profile />}
            </main>

            {/* <Footer /> */}
        </>
    )
}
