import React from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import {selectProduct} from '../../../../redux/actions/actions';

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;

    width: 150px;
    height: 170px;

    margin-top: 20px;
    padding: 10px 20px;

    border-radius: 20px;

    user-select: none;
    cursor: pointer;

    .category-img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        img{
            width: 70%;
            height: 70%;

        }
    }
    span {
        margin-top: 20px;
        font-weight: 600;
    }

    &.active{
        background:#FB9202;
        color: #fff;
    }
`;

 function CategoryItem ({selectProduct, params, active, handelActive}) {
    const {url, category, _id} = params;
    const onSelect = (cat, id) => {
        selectProduct(cat)
        handelActive(id)
    }
    return (
        <Category onClick={() => onSelect(category, _id)} className={active ? 'active' : null}>
            <div className="category-img">
                <img src={url} alt={category} />
            </div>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </Category>
    );
}

const mapDispathToProps = {
    selectProduct
}

export default connect(null, mapDispathToProps)(CategoryItem); 