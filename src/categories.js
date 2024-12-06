const categories = {}
const excludeWords = ["conference", "france", "paris", "evenement"]

const removeSpecialCharsForSearch = (s) => {
    return s
        .normalize('NFD') // Normalize to decompose accented characters into base characters
        .replace(/[\u0300-\u036f]/g, '') // Remove the accent marks
        .replace(/[^a-zA-Z0-9 ]/g, ''); // Remove all non-alphanumeric characters except spaces
};

// Create a regex pattern from the list
const pattern = new RegExp(`\\b(${excludeWords.join('|')})`, 'i');
const hasExcludedWord = (str) => pattern.test(removeSpecialCharsForSearch(str));

const generateCategories = (data_event) => {
    data_event.forEach(post => {
        const post_categories = post.category.toLowerCase().split("//");
        const cleanedStrings = post_categories.map(s =>
            s.replace(/^[\s'.]+|[\s'.]+$/g, "")
        );

        cleanedStrings.forEach(element => {
            if (element.length > 2 && element.length < 50 && !hasExcludedWord(element)) {
                if (categories[element] == undefined) {
                    categories[element] = []
                }
                categories[element].push({ key: element, title: post.title })
            }

        });
    });

    const selectCategories = []

    for (const key in categories) {
        if (Object.prototype.hasOwnProperty.call(categories, key)) {
            const element = categories[key];
            if (element.length > 0) {
                selectCategories[key] = { key: key, length: element.length }
            }
        }
    }

    const entries = Object.entries(selectCategories);
    entries.sort(([, a], [, b]) => b.length - a.length);
    // const arr = entries.reverse()
    const sortedMap = new Map(entries);

    const array = Array.from(sortedMap.values());

    return array

}


export { generateCategories }