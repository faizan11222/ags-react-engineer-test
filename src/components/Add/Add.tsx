import { FC } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: ${({ theme }) => theme.size16};
    border-bottom: 0.1rem solid ${({ theme }) => theme.base10};

    > h1 {
        font-size: ${({ theme }) => theme.font18};
        
        span + span {
            color: ${({ theme }) => theme.primary100};
        }
    }
`;

const Avatar = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.size8};
    align-items: center;
    font-size: ${({ theme }) => theme.font14};
    color: ${({ theme }) => theme.base120};

    img {
        width: ${({ theme }) => theme.size32};
    }
`;

const Add: FC = () => {
    return (
      <div>
          <h1>Add Components</h1>
      </div>
    )
}

export default Add;
