import axios from 'axios';

export default {
  // Gets all books
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  createSave: function (data) {
    console.log(data);
    return axios
      .post('http://localhost:3001/api/books', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getSaved: function () {
    return axios
      .get('http://localhost:3001/api/books')
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteBook: function (id) {
    return axios.delete('http://localhost:3001/api/books/' + id);
  },
};
