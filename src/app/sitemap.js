import DATA from '../data/data.json';

const extractMenuHrefs = ({ menu }) => {
    const hrefs = [];
    menu.forEach(({ href, children }) => {
        if (href) {
            hrefs.push(href);
        }

        if (children) {
            extractMenuHrefs({ menu: children }).forEach(h => hrefs.push(h));
        }
    });

    return hrefs;
}

export default function sitemap() {
    const { menu, companyInfo: { baseUrl }, posts } = DATA;
    const list = extractMenuHrefs({ menu });

    return [
        ...posts.map(({ href }) => href),
        ...list
    ].map((url) => ({
        url: baseUrl + url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    }));
};
