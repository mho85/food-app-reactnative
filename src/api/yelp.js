import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -d--qhXAhXbpCMCur9m6KkDIgZW-YRKDqPwg3GAud-kFv3iE-Y6rQt4iDKv7Gvj0KHxfz_DON8VA34HrPCxPpw4faUBTbOTbKAiR0NPChSrttgDyPIOAk8s6aFLfXnYx'
    }
});