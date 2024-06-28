import inquirer from "inquirer";
import chalk from "chalk";
//------------TO-DO-LIST----------------
let ToDos = [];
let condition = true;
//Till the condition is true the loop will continue running
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "ToDos",
            message: chalk.blue.bold("What do you want to add in your To-Do-list?📝"),
            type: "input"
        },
        {
            name: "addMore",
            message: chalk.blue.bold("Do you want to add more in your To-Do-list?📝"),
            type: "confirm",
            default: "false",
        },
    ]);
    ToDos.push(addTask.ToDos);
    console.log(chalk.bold.blue("📝 Your To-Do-List: "), ToDos);
    condition = addTask.addMore;
}
while (true) {
    let user = await inquirer.prompt([
        {
            name: "moreTask",
            message: chalk.bold.blue("Do you want to add more task or remove task?📝"),
            type: "list",
            choices: [chalk.green("Addmore📝"), chalk.green("Remove Task📃"), chalk.red("Exit🚫")]
        }
    ]);
    if (user.moreTask === chalk.green("Addmore📝")) {
        condition = true;
        while (condition) {
            let addTask = await inquirer.prompt([
                {
                    name: "ToDos",
                    message: chalk.blue.bold("What do you want to add in your To-Do-list?📝"),
                    type: "input"
                },
                {
                    name: "addMore",
                    message: chalk.blue.bold("Do you want to add more in your To-Do-list?📝"),
                    type: "confirm",
                    default: "false",
                },
            ]);
            ToDos.push(addTask.ToDos);
            console.log(chalk.bold.blue("📝 Your To-Do-List: "), ToDos);
            condition = addTask.addMore;
        }
    }
    else if (user.moreTask === chalk.green("Remove Task📃")) {
        ToDos.pop();
        console.log(chalk.bold.blue("📝 Your To-Do-List: "), ToDos);
    }
    else if (user.moreTask === chalk.red("Exit🚫")) {
        break;
    }
}
