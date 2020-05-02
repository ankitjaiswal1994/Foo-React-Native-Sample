import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer m-GBCtcoOZJK400X2qsvt2czCCurHxsmCgAowgGBhhbQonSVoultLjX5BzDz7R7eT1-aIm37y6DMDFhAr2cXYlYH4djMMre1pb6E7O5u12Oj39AxFIlTABnAxj6sXnYx",
  },
});
