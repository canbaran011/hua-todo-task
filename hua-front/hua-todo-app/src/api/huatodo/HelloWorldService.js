import axios from "axios";


class HelloWorldService {
    executeHelloWorldService() {
        //will return promise back
        return axios.get('http://localhost:8080/hello-world');
        // console.log('running service')
    }
    executeHelloWorldBeanService() {
        //will return promise back
        return axios.get('http://localhost:8080/hello-world-bean');
        // console.log('running service')
    }
    executeHelloWorlPathVariableService(name) {
        //will return promise back
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
        // console.log('running service')
    }

    
}

export default new HelloWorldService()