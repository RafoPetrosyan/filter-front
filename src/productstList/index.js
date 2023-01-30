import React from 'react';
import Server from '../server/products.json'
import {options} from "../helper";
import {Input, Pagination, Select} from "antd";
import useContainer from "./hook";
import _ from 'lodash'
import './style.scss'

const Products = () => {
    const {
        handleChangeBrand,
        handleChangeCategory,
        handleSearch,
        category,
        brand,
        setCategory,
        products,
        currentPage,
        handlePagination
    } = useContainer()
    return (
        <div>
            <div className='filterContent'>
                <Input
                    placeholder="Basic usage"
                    style={{width: '200px'}}
                    onChange={handleSearch}
                    value={setCategory}
                />
                <Select
                    allowClear
                    style={{width: '200px'}}
                    placeholder="Category"
                    value={category}
                    onChange={handleChangeCategory}
                    options={options(Server, 'category')}
                />
                <Select
                    allowClear
                    style={{width: '200px'}}
                    placeholder="Brand"
                    value={brand}
                    onChange={handleChangeBrand}
                    options={options(Server, 'brand')}
                />
            </div>
            <div className='cardContent'>
                {
                    !_.isEmpty(products) && !isNaN(+currentPage) && products[currentPage - 1].map(el =>
                        <div key={el.id} className='card'>
                            <img src={el.thumbnail} alt="#"/>
                            <p>Product Name : {el.title}</p>
                            <div>
                                {
                                    el.discountPercentage ? <p
                                        style={{marginRight: '15px'}}>DiscountPercentage {el.discountPercentage}</p> : null
                                }
                                {
                                    <p>Price <span
                                        style={el.discountPercentage ? {textDecoration: 'line-through'} : {}}> {el.price}</span>
                                    </p>
                                }
                            </div>
                        </div>)
                }
            </div>
            <Pagination
                pageSize={10}
                current={+currentPage}
                total={products.length * 10}
                onChange={handlePagination}
                showSizeChanger={false}
            />
        </div>
    );
};

export default Products;