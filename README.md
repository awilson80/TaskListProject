# TaskListProject
Generation JWD Project - Team 2


**!Any time you work on the project, please make sure you are making changes on a new branch! DO NOT use the main branch!**

**Making a branch**
On the main page of the repository, click on "main" in the top left
Type the name of the branch you want to make, and then click "create branch"
  **-You should name your branches after what part of the project you are working on. For example, if you are adding a button to the website, your branch should be named "button"**
To start work on your branch, open the project in VSCode, type ctrl + ~ and then use: **git checkout branchname** (replace "branchname" with the name of your branch)

**Getting the latest version of the project**
To get the latest version of the project, open VSCode, and type ctrl + ~
Type **git fetch origin** 
Type **git status** to find out if there is a new version
Type **git pull** to get the latest version


**Pushing your changes**
When you are done making changes **on your branch**, you should type **git add .** to add everything to the staging area
Type **git commit -m " "** to commit your changes. Make sure to include a message between the quotes that describes what you changed. For example, "Adds a button"
Type **git push origin branchname** (replace "branchname" with the name of your branch) to push changes to GitHub for everyone to review
