import { Dispatch, SetStateAction } from 'react'
import LinksIconHeader from '../../assets/LinksIconHeader'
import ProfileIconHeader from '../../assets/ProfileIconHeader'
import Button from './Button'
import DevlinksLogoLg from '@/assets/DevlinksLogoLg'

export default function Header({
    page,
    setPage
}: {
    page: string,
    setPage: Dispatch<SetStateAction<string>>
}) {
    return (
        <header className="flex items-center justify-between px-6 py-4">
            <DevlinksLogoLg />

            <nav className="flex space-x-4">
                <button
                    className={`flex items-center justify-center gap-2 h-10 bg-transparent rounded transition-all duration-200 min-w-[74px] border-none ${page === 'links' ? 'text-purple-600 bg-purple-200' : 'text-gray-500'}`}
                    onClick={() => setPage('links')}
                >
                    <LinksIconHeader />
                    <span className={`${page === 'links' ? 'text-purple-600' : 'hover:text-purple-600'}`}>
                        Links
                    </span>
                </button>

                <button
                    className={`flex items-center justify-center gap-2 h-10 bg-transparent rounded transition-all duration-200 min-w-[74px] border-none ${page === 'profile' ? 'text-purple-600 bg-purple-200' : 'text-gray-500'}`}
                    onClick={() => setPage('profile')}
                >
                    <ProfileIconHeader />
                    <span className={`${page === 'profile' ? 'text-purple-600' : 'hover:text-purple-600'}`}>
                        Profile Details
                    </span>
                </button>
            </nav>

            <p
                className="flex items-center justify-center h-10 min-w-[82px] text-purple-600 border border-purple-600  transition-all duration-200"
            >
                <Button alt>
                    <span className="hidden md:inline">
                        Preview
                    </span>
                </Button>
            </p>
        </header>
    )
}
