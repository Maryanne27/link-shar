import axios from 'axios'
import { dataIsLink, dataIsUserInfo } from './typeChecks'

export const getUserData = async (userId: string | undefined) => {
    // const apiUrl =
    //     import.meta.env.VITE_ENVIRONMENT === 'development' ?
    //     import.meta.env.VITE_DEV_API_URL :
    //     import.meta.env.VITE_API_URL

    if (!userId) {
        return null
    }

    const userData: UserData = {
        userInfo: {
            firstName: '',
            lastName: '',
            email: '',
            profileImg: ''
        },
        links: [],
        slug: ''
    }

    const res = await axios.get(apiUrl, {
        params: {
            userId
        }
    })

    if (res && !res.data.error) {
        const { userInfo, links, slug } = res.data

        if (dataIsUserInfo(userInfo)) {
            userData.userInfo = userInfo
        }

        if (links.length > 0) {
            userData.links = links.map((link: unknown) => {
                if (dataIsLink(link)) {
                    return ({
                        ...link,
                        id: crypto.randomUUID(),
                        inputRef: null
                    })
                }
            })
        }

        userData.slug = slug
    }

    return userData
}