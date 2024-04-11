import DATA from '@/data/data.json';

const findMenuItem = ({fieldName = 'href', searchKey, findIncludedKey, menu = DATA.menu}) => {
    for (let i = 0; i < menu.length; i++) {
        const menuItem = menu[i];

        if (menuItem[fieldName] === searchKey) {
            return menuItem;
        }

        if (findIncludedKey && menuItem[fieldName].includes(searchKey)) {
            return menuItem;
        }

        if (menuItem.children) {
            const foundItem = findMenuItem({fieldName, searchKey, findIncludedKey, menu: menuItem.children});
            if (foundItem) {
                return foundItem;
            }
        }
    }
}

const findBlogItem = ({href}) => DATA.posts.find(({href: postHref}) => postHref === `/blog/${href}`);

export const getMetaByPage = ({href: pageHref}) => {
    const {metadata} = DATA;
    const {meta: pageMeta = {}, href: pageHref_} = findMenuItem({searchKey: pageHref, findIncludedKey: true}) || {};
    const {meta: blogMeta = {}, href: blogHref} = findBlogItem({href: pageHref}) || {};
    const meta = {
        ...metadata,
        ...pageMeta,
        ...blogMeta,
    };
    const canonical = `https://www.mastersteelhouse.com${blogHref || pageHref_ || pageHref}`;
    const openGraph = {
        title: meta.title,
        description: meta.description,
        url: canonical,
        siteName: 'Master Steel House',
        images: [
            {
                url: 'https://www.mastersteelhouse.com/images/services/blog-5-846-448.webp',
                width: 846,
                height: 448,
            }
        ],
        locale: 'tr_TR',
        type: 'website',
    };

    return {
        metadataBase: new URL(canonical),
        ...meta,
        alternates: {
            canonical
        },
        openGraph
    };
};
