import DataTable from '@/components/DataTable';
import React, { useState, useEffect } from 'react';
import { getUsersInfo } from '@/redux/users/UserAction';
import localization from '@/utils/localization';
import { useDispatch, useSelector } from 'react-redux';
import useLoader from '@/hooks/useLoader';
import { prepareData } from './helperFunctions';
import { columns, options } from './tableMetadata';

function CampaignList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer.userList);
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState(new Map());
  const [loader, startLoader, stopLoader] = useLoader();

  if (!mounted) {
    dispatch(getUsersInfo());
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const processdData = prepareData(inputData, userList);
    setData(processdData);
  }, [userList, inputData]);

  const updateInputData = (receivedData = []) => {
    startLoader();
    const checkArr = Array.isArray(receivedData);
    if (checkArr) {
      const processedData = new Map();
      receivedData.forEach((item) => {
        processedData.set(item?.id, item);
      });
      const updatedInput = new Map([...inputData, ...processedData]);
      setTimeout(() => {
        setInputData(updatedInput);
        stopLoader();
      }, 3000);
    }
  };

  window.provideData = updateInputData;

  return (
    <>
      {loader}
      <DataTable 
        title={localization.header.campaignHeading} 
        data={data} 
        columns={columns} 
        options={options} 
      />
    </>
  );
}

export default CampaignList;
