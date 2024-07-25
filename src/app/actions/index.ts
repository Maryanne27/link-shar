'use server'
import { signIn, signOut } from "@/auth"

export async function doSocialLogin(formData: { get: (arg0: string) => any; }) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: '/home' })
}

export async function doLogout() {
    await signOut({ redirectTo: '/' })
}

export async function doCredentialsLogin(formData: any) {
    try {
        const res = await signIn('credentials', { email:formData.get('email'),
    password:formData.get('password'), redirect: false });
return res
    } catch (err) {
throw new Error(err)
    }
}