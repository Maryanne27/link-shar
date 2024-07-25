import ImageIcon from '../../../assets/ImageIcon'
import Button from '@/app/components/Button'
import SavedIcon from '../../../assets/SavedIcon'

export default function Profile() {
    return (
        <>
            <section className="relative p-10 w-full max-w-2xl mx-auto">
                <div className="my-10">
                    <h3 className="text-xl font-bold">Profile Details</h3>
                    <p className="text-gray-600 mt-2">Add your details to create a personal touch to your profile.</p>
                </div>

                <div className="py-5">
                    <label htmlFor="image" className="block">
                        <span className="text-gray-600">Profile Picture</span>
                        <div className="relative h-48 w-48 bg-purple-200 rounded-md mt-4 mb-6 overflow-hidden">
                            {/* Uncomment this block when adding the image preview logic
                            {
                                (imgPreviewPath || userInfo.profileImg) && (
                                    <img src={imgPreviewPath || userInfo.profileImg} alt="" className="w-full h-full object-cover" />
                                )
                            } */}
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept='image/png, image/jpeg, image/jpg'
                                className="hidden"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity">
                                <ImageIcon />
                                <span className="text-white font-semibold">+ Upload Image</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">Image must be below 1024x1024px. Use PNG or JPG format.</p>
                    </label>
                </div>

                <div className="grid gap-4 mt-6">
                    <label htmlFor="first-name" className="block">
                        <span className="text-gray-600">First name*</span>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder='e.g. John'
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </label>

                    <label htmlFor="last-name" className="block">
                        <span className="text-gray-600">Last name*</span>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder='e.g. Appleseed'
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </label>

                    <label htmlFor="email" className="block">
                        <span className="text-gray-600">Email</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='e.g. email@example.com'
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </label>
                </div>

                <div className="relative mt-8">
                    <Button>
                        Save
                    </Button>
                </div>
                
            </section>

            {/* Uncomment this block when adding the toast logic
            <Toast isVisible={success}>
                <SavedIcon />
                <span>Your changes have been successfully saved!</span>
            </Toast>
            */}
        </>
    )
}
