import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersInfo } from '@/redux/users/UserAction';
import CampaignList from './CampaignList';

function Campaigns() {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    dispatch(getUsersInfo());
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return <CampaignList />;
}

export default Campaigns;
