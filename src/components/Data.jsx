import { firestore } from "src/firebase";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Data() {
  const Container = styled.div`
    margin-top: 20px;
  `;

  const Product = styled.div`
    display: flex;
    padding: 20px;
    margin-top: 10px;
  `;

  const FlexGrow = styled.div`
    flex-grow: 100px;
    padding-left: 20px;
    padding-top: 2px;
  `;

  const Title = styled.h5`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
  `;

  const Date = styled.p`
    color: grey;
    font-size: 13px;
  `;

  const Price = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
  `;

  return <div>Data</div>;
}
