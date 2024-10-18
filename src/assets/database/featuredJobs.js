import img from "./fulllogo_transparent_nobuffer 4.png";
import axios from "axios";
export const fetchFeaturedJobs = async () => {
  try {
    const response = await axios.get(
      "https://pm-network-backend-production.up.railway.app/api/jobs/getTop10Featured"
    );

    // Create a new array with the img property added to each job
    const jobsWithImage = response.data.map((job) => ({ ...job, img }));
    return jobsWithImage;
  } catch (error) {
    console.log(error);
  }
};
