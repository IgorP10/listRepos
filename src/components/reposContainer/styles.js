import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: auto;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #FF7A00;
    margin-top: 15px;
    
    @media (max-width: 430px) {
        width: 300px;
    }

    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        
        border: none;
        border-bottom: 2px solid grey;        
    }

    button {
        padding: 15px;
        background-color:#333333;
        color: #fff;
        text-decoration:none;
        border-radius: 3px;
        text-align: center;

        &:hover {
            cursor: pointer;
            background: #232323;
            transition: .4s ease;
        }
    }
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h1`
    height: 450px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.h2`
    width: 100%;
    height: 100px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`