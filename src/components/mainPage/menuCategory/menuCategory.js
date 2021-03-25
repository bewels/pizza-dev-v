import React from 'react';

import CategoryItem from './categoryItem';


import styled from 'styled-components';
import { connect } from 'react-redux';
import { handelShow, onCategoryActive } from '../../../redux/actions/actions';

const CategoryContainer = styled.div`
    margin-top: 30px;

    overflow: hidden;

    & .category{
        display: flex;
        justify-content:center;
        gap: 50px;
    }

    & .category-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        & .viwe-all {
                background: #FB9202;
                padding: 5px 10px;
    
                border: none;
                border-radius: 15px;
    
                font-size: 15px;
                color: #fff;
    
                cursor: pointer;
    
                &:focus {
                    outline: none;
                }
            }
    }



`;

function MenuCategory ({category, handelShow, menu, onCategoryActive}) {
    const handelActive = (id) => {
        onCategoryActive(id)
    }
    return (
        <CategoryContainer>
            <div className="category-info">
                <h2>Menu Category</h2>
                <button onClick={() => handelShow('Menu', menu)} className="viwe-all">Viwe All</button>
            </div>
            <div className="category">
                {
                    category.map(item => <CategoryItem handelActive={handelActive} params={item} key={item._id} active={item.active}/>)
                }
            </div>
        </CategoryContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
        menu: state.menu.menuItems
    };
}

const mapDispathToProps = {
    handelShow,
    onCategoryActive
}

export default connect(mapStateToProps, mapDispathToProps)(MenuCategory);