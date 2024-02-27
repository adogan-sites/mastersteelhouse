import DATA from '@/data/data.json';

const findMenuItem = ({ fieldName = 'href', searchKey, findIncludedKey, menu = DATA.menu }) => {
    for (let i = 0; i < menu.length; i++) {
        const menuItem = menu[i];

        if (menuItem[fieldName] === searchKey) {
            return menuItem;
        }
        if (findIncludedKey && menuItem[fieldName].includes(searchKey)) {
            return menuItem;
        }
        if (menuItem.children) {
            const foundItem = findMenuItem({ fieldName, searchKey, findIncludedKey, menu: menuItem.children });
            if (foundItem) {
                return foundItem;
            }
        }
    }
}

export const getMetaByPage = ({ href: pageHref }) => {
    const { metadata } = DATA;
    const { meta: pageMeta = {} } = findMenuItem({searchKey: pageHref, findIncludedKey: true}) || {};

    return {
        ...metadata,
        ...pageMeta
    };
};
