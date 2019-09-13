package com.huatodo.rest.webservices.huatodorestwebservice.huatodo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.huatodo.rest.webservices.huatodorestwebservice.Todo;
import com.huatodo.rest.webservices.huatodorestwebservice.huatodo.HuaTodoHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HuaTodoResource {  
	
	@Autowired
	private HuaTodoHardcodedService huaTodoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return huaTodoService.findAll();
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		 return huaTodoService.findById(id);
	}
	//DELETE /users/{username}/todos/{id}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void>deleteTodo(
			@PathVariable String username, @PathVariable long id){
		
		Todo todo =huaTodoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	//Edit/Update a Todo
	//PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo>updateTodo(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo){
		
		Todo todoUpdated = huaTodoService.save(todo);
		
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	//Create a new Todo
	//POST /users/{user_name}/todos/
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void>postTodo(
			@PathVariable String username,
			 @RequestBody Todo todo){
		
		Todo createdTodo = huaTodoService.save(todo);
		
		//Location
		//Get current resource url
		// /users/{username}/todos/{id}
	URI uri =	ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
