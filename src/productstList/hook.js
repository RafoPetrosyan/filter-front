import {useSearchParams, createSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Server from "../server/products.json";
import {chunkArray, filterData} from "../helper";

function useContainer() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(() => searchParams.get('page') || '1');
    const [search, setSearch] = useState(searchParams.get('search'));
    const [brand, setBrand] = useState(searchParams.get('brand'));
    const [category, setCategory] = useState(searchParams.get('category'));
    const [products, setProduct] = useState(chunkArray(Server));

    const queryParams = {
        page: !isNaN(+currentPage) ? currentPage : '1',
        search,
        category,
        brand,
    };

    useEffect(() => {
        const query = Object.keys(queryParams).reduce((acc, item) => {
            if(queryParams[item]) acc[item] = queryParams[item];
            return acc;
        }, {});
        setSearchParams(`?${createSearchParams(query).toString()}`);
    }, [currentPage, search, brand, category]);

    useEffect(() => {
        setProduct(chunkArray(filterData(Server, search, brand, category)))
        setCurrentPage(1);
    }, [brand, category, search]);


    const handlePagination = (ev) => setCurrentPage(ev);

    const handleSearch = ({target: {value}}) => setSearch(value);

    const handleChangeCategory = (value) => setCategory(value);

    const handleChangeBrand = (value) => setBrand(value);

    return {
        handleChangeBrand,
        handleChangeCategory,
        handleSearch,
        category,
        brand,
        search,
        products,
        currentPage,
        handlePagination
    }
}

export default useContainer;