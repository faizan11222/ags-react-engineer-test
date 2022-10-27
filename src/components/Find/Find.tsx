import { FC } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import { Input, Table } from 'antd';
const { Search } = Input;



const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-text: center
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



let dataSource:any = [];
  
  const columns = [
    {
      title: 'Product',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Spec',
      dataIndex: 'capacity',
      key: 'age',
    },
    {
      title: 'Sku',
      dataIndex: 'sku',
      key: 'sku',
    },

    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
  ];
  
  

function changeSearch(e:any){
    console.log(e);
    const params = {
        sku: e,
        brand: e,
        model:e
      };
      axios.get('https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue', {params}).then(result => dataSource=result)
    }


const Find: FC = () => {
    return (
        <>
        <div className='m-auto'>
       <h1 className='text-center mt-5'><b><span>Find a </span><span>Product</span></b></h1>

       <Search
      placeholder="Input Search Text"
      onSearch={value => changeSearch(value)}
      style={{ width: '80%', marginLeft:'10%', marginTop:'50px', marginBottom:'50px' }}
    />

<Table dataSource={dataSource} columns={columns} style={{width:'80%',  marginLeft:'10%'}} pagination={false}/>
    </div>

   
  
    </>
    )
}

export default Find;
