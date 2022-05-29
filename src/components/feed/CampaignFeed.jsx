import {React, useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from '../../firebaseConfig'

import "./feed.css";
import CreateCampaign from "../createCampaign/CreateCampaign";
import PostCampaign from "../post/PostCampaign";
// import { Posts } from "../../dummyData";


const Feed = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const campaignsCollectionRef = collection(db, "campaigns")

  useEffect(() => {
    const getCampaigns = async ()=> {
      const data = await getDocs(campaignsCollectionRef);

      data.forEach((doc) => {
        setAllCampaigns(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      })
    }
    getCampaigns()
  }, [])

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <div className="feed-contents">
          <CreateCampaign />
          {allCampaigns.map((campaign) => (
            <PostCampaign campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
