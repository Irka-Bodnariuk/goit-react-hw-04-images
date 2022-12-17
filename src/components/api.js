import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (quary, page) => {
  const { data } = await axios.get(`?key=30687334-5aed2e645051261bb19af205b&`, {
    params: {
      q: quary,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
