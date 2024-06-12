export const BASE_URL = 'https://estro.cvyl.me';
export const ROOT_URL = 'https://cvyl.me';
export const SITE_NAME  = 'Estro';
export const SITE_TITLE = 'Estro';
export const SITE_DESCRIPTION = 'Generated by create next app';
export const SITE_AUTHOR = 'Mikka (@cvyl)';
export const SITE_COLOR = '#ee9ca7';

export const SITE_STATE = 'alpha'; // alpha, beta, stable
export const SITE_VERSION_NUMBER = '0.0.3' + ' ';
export const SITE_VERSION = SITE_VERSION_NUMBER + {
    alpha: 'α',
    beta: 'β',
    stable: '',
}[SITE_STATE];

const ROOT_SITE_TEMPLATE = '%s | ' + SITE_NAME + ' - ' + SITE_VERSION;
const DEFAULT_SITE_TITLE = SITE_TITLE + ' - ' + SITE_VERSION;

export const rootMetadata = {
    title: {
        template: ROOT_SITE_TEMPLATE,
        default: DEFAULT_SITE_TITLE,
    },
    description: SITE_DESCRIPTION,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        site_name: SITE_NAME,
        url: BASE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: SITE_TITLE,
            },
        ],
    },
    authors: [
        {
            name: SITE_AUTHOR,
            url: ROOT_URL,
        },
    ],
    twitter: {
        handle: '',
        site: BASE_URL,
        cardType: 'summary_large_image',
    },
    };