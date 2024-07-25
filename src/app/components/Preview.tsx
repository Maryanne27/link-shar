import { useContext } from "react";
import ImageIcon from "../../assets/ImageIcon";
// import PreviewLink from "../previewLink/PreviewLink";
import { DataContext } from "../../contexts/DataContext";

export default function ProfilePreview({
    bare,
    userData
}: {
    bare?: boolean,
    userData?: UserData | null | undefined
}) {
    const { userInfo, links, imgPreviewPath } = useContext(DataContext);

    const firstName = userData?.userInfo.firstName || userInfo?.firstName;
    const lastName = userData?.userInfo.lastName || userInfo?.lastName;
    const email = userData?.userInfo.email || userInfo?.email;
    const profileImg = userData?.userInfo.profileImg || userInfo?.profileImg;
    const displayLinks = userData?.links || links;

    return (
        <section className={`w-fit mx-auto rounded-xl text-center ${bare ? 'py-[113.5px] gap-[46px] min-w-[20%]' : 'py-[48px] px-[56px] gap-[56px] bg-white shadow-lg'}`}>
            <div className={`text-center ${bare ? 'min-w-[160px]' : ''}`}>
                {
                    (imgPreviewPath || profileImg) ? (
                        <img
                            src={imgPreviewPath || profileImg}
                            alt=''
                            width={104}
                            height={104}
                            className={`mx-auto rounded-full border-4 ${bare ? 'border-purple-600 w-24 h-24 mb-3' : 'border-purple-500 mb-6'}`}
                        />
                    ) : (
                        <div
                            className={`flex flex-col items-center justify-center ${bare ? 'w-24 h-24 mb-3' : 'w-28 h-28 mb-6'} rounded-full border-2 border-purple-500 ${!imgPreviewPath || !profileImg ? 'bg-purple-200' : ''}`}
                            data-transparent={!imgPreviewPath || !profileImg ? 'true' : 'false'}
                        >
                            <ImageIcon />
                            <span className={`text-center ${bare ? 'text-xs' : 'text-sm'}`}>
                                No image
                            </span>
                        </div>
                    )
                }

                <h2 className={`text-lg ${bare ? 'text-base' : 'text-xl'} ${!firstName && !lastName ? 'h-[27px] bg-transparent' : ''}`} data-transparent={!firstName && !lastName ? 'true' : 'false'}>
                    {firstName} {lastName}
                </h2>

                <p className={`text-sm ${!email ? 'h-[24px] bg-transparent' : ''}`} data-transparent={!email ? 'true' : 'false'}>
                    {email}
                </p>
            </div>

            <div className={`grid gap-5 ${bare ? 'gap-5' : 'gap-5'}`}>
                {/* {displayLinks.length > 0 && displayLinks.map((link, idx) => {
                    if (!bare || idx < 5) {
                        return (
                            <PreviewLink
                                link={link}
                                key={link.id}
                                bare={bare}
                            />
                        )
                    }
                    return null;
                })} */}
            </div>
        </section>
    );
}
