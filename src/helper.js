import _ from "lodash";

export const options = (data, key) => {
    const opt = _.unionBy(data, key)
    return opt.map(el => ({label: _.startCase(el[key]), value: el[key]}))
}

export const chunkArray = (array) => _.chunk(array, 10);

export const filterData = (data, search, brand, category) => {
    let searchData = data;
    if(search) searchData = searchData.filter((item) => item.description.includes(search) || item.title.includes(search));
    if(category) searchData = searchData.filter((item) => item.category === category);
    if(brand) searchData = searchData.filter((item) => item.brand === brand);

    return searchData;
}