I'll make this look better later I promise - Josh
## Dependency Setup Instructions
1. Be sure to run the following command inside of the `react folder` and `server folder` separately:
    ```
    npm install
    ```
## Database Setup Instructions
1. Open MongoDB Compass.
2. Click the `+` icon next to `Databases`.
3. Enter the Database Name (`quackstore`) and a Collection Name (`socks`, `tops`, or `bottoms`)
4. Add the remaining Collections that were not entered in Step 3.

## git commands to use
1. You can use the following command to show all branches currently in the repository:
    ```
    git branch
    ```
2. You can use the following command to create a new branch:
    ```
    git branch branch_name
    ```
    - Where branch_name is replaced by what you are calling the new branch (ex: dev)
3. You can use the following command to switch to a different branch:
    ```
    git switch branch_name
    ```
    - Where branch_name is replaced by what you are calling the new branch (ex: dev)

## Node Modules to Install During Development (Remove This Later)
1. Ones for react
    ```
    npm install
    ```
    - Inside the `react folder` when using the terminal
2. Ones for the server
    ```
    npm install express
    ```
    - Inside the `server folder` when using the terminal
3. React Router DOM
    ```
    npm install react-router-dom
    ```
    - Inside the `react folder` when using the terminal

## Useful commands
1. Shift + Alt + F
    - When in a json file while in VSCode, formats the json file to look prettier
2. Ctrl + J
    - When in VSCode, this toggles the terminal window

## Git Process
1. commit changes in dev branch
2. switch to main branch
3. pull changes from GitHub
4. merge with dev branch
5. switch to dev branch
6. merge with main branch