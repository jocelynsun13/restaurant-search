import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ryxyjKC-TD1oWb44mYpi-vdmLp_Qh6QlwusVNA3dAwwufgglaZEu4xjoEPZ1goB8uS7KElKbvoMJhZ0PtCJ5BkezVIDOft-k0jw3p7QtOwnly8y8hG8bxScBdNEQXnYx'
  }
});
