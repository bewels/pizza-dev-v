import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & .cricle {
        width: 60px;
        height: 60px;

        background: #D7F5FF;
        margin-right: 10px;

        border-radius: 50%;
        
    }

    & .user-text {
        span {
            display: block;

            font-size: 20px;
        }

        & .user {
            font-weight: 700;
        }

        & .status {
            opacity: .5;
        }
    }
`;

export default function ProfileHeader () {
    return (
        <ProfileContainer>
            <div className="cricle"></div>
            <div className="user-text">
                <span className="user">Ilyaasdasd</span>
                <span className="status">User</span>
            </div>
        </ProfileContainer>
    );
}