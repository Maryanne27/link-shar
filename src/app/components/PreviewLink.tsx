import RightArrowIcon from '../../assets/RightArrowIcon';
// import { generateBackgroundColor } from '../../lib/generateBackgroundColor';
import { generatePlatformIcon } from '../../lib/generatePlatformIcon';
import { PLATFORMS } from '../../lib/platforms';

export default function PreviewLink({
    link,
    bare
}: {
    link: Link;
    bare?: boolean;
}) {
    const isFrontEndMentor = link.platform === PLATFORMS.FRONTEND_MENTOR;

    return (
        <a
            href={link.linkUrl}
            target='_blank'
            rel='noopener nofollower'
        >
            <button
                className={`flex items-center gap-2 w-[237px] px-4 py-4 rounded ${isFrontEndMentor ? 'border border-gray-300' : ''}`}
                // style={{
                //     backgroundColor: generateBackgroundColor(link.platform),
                //     height: bare ? '44px' : '56px'
                // }}
            >
                {generatePlatformIcon(link.platform, true)}

                <span
                    className="flex-grow text-left"
                    style={{
                        color: isFrontEndMentor ? 'var(--clr-dark-grey)' : 'var(--clr-white-pri)'
                    }}
                >
                    {link.platform}
                </span>

                <RightArrowIcon
                    grey={isFrontEndMentor}
                />
            </button>
        </a>
    );
}
