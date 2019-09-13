package com.huatodo.rest.webservices.huatodorestwebservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	
	//get 
	//URI -/hello-world
	//method - "HELLO WORLD"
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "HelloWorld";
	}
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("HelloWorldBean");
	}
	
	//helloworld/path-variable/todo23min
	@GetMapping(path="/hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
	return new HelloWorldBean(String.format("Hello , %s",name));
		//throw new RuntimeException("some problems happens");
	}
	
}
