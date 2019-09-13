package com.huatodo.rest.webservices.huatodorestwebservice.huatodo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.huatodo.rest.webservices.huatodorestwebservice.Todo;

@Service
public class HuaTodoHardcodedService {
	private static int idCounter=0;
	private static List<Todo> todos = new ArrayList<Todo>();
	static {
		todos.add(new Todo(++idCounter,"user1","item1","desc1",false,new Date()));
		todos.add(new Todo(++idCounter,"user2","item1","desc2",false,new Date()));
		todos.add(new Todo(++idCounter,"user3","item1","desc3",false,new Date()));
	
	}
	public List<Todo> findAll(){
		return todos;
	}
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo =findById(id);
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
}
