Retrieve all Todos

GET /users/{user_name}/todos

DELETE /users/{user_name}/todos/{todo_id}

EDIT(PUT) /users/{user_name}/todos/{todo_id}

CREATE(POST) /users/{user_name}/todos

…or create a new repository on the command line
echo "# hua-todo-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/canbaran011/hua-todo-app.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/canbaran011/hua-todo-app.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.