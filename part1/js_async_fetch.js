// Synchronous
function runSynchronousExample() {
    console.log("Synchronous 1");
    console.log("Synchronous 2");
    console.log("Synchronous 3");
    // If the is a logic in this line that takes time, it will block the execution of the next lines
    console.log("Synchronous 4");
    console.log("Synchronous 5");
}

// runSynchronousExample();


function runBlockingExample() {
    console.log("Start");

    // Simulate a blocking operation
    for (let i = 0; i < 100000000000; i++) {

    }

    console.log("End");
}

// runBlockingExample();

// Asynchronous Features

function runNonBlockingExample() {
    console.log("Start");

    setTimeout(() => {
        console.log("This runs later");
    }, 2000);

    console.log("End");
}

// runNonBlockingExample();

// setTimeout is a function that runs a function after a specified delay
// setInterval is a function that runs a function repeatedly after a specified delay
// Fetch API: Allows you to make HTTP requests to fetch resources from a server
// Event Handlers: Respond to user actions, such as clicking a button or typing in a form

const callAPIExample = async () => {
    console.log("Start");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data: ", data);

    } catch (error) {
        console.error("Error: ", error.message);
    }

    console.log("End");
}

// callAPIExample();



// 1. Create (POST) - Sending new data to the server
const createTodoAsync = async () => {
    console.log("Creating new Todo...");

    const newTodo = {
        title: "Buy groceries",
        completed: false,
        userId: 1
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST", // Specify the method as POST
            headers: {
                "Content-Type": "application/json" // Tell the server we are sending JSON data
            },
            body: JSON.stringify(newTodo) // Convert our object to a JSON string
        });

        if (!response.ok) {
            throw new Error(`Failed to create Todo: ${response.status}`);
        }

        const data = await response.json();
        console.log("Todo created successfully! ✅", data);

    } catch (error) {
        console.error("Error creating Todo:", error.message);
    }
};



// 3. Update (PUT) - Changing existing data on the server
const updateTodoAsync = async (id) => {
    console.log(`Updating Todo with ID: ${id}...`);

    const updatedData = {
        title: "Updated task name",
        completed: true
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT", // Specify the method as PUT
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`Failed to update Todo: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Todo ${id} updated! ✅`, data);

    } catch (error) {
        console.error(`Error updating Todo ${id}:`, error.message);
    }
};


// 4. Delete (DELETE) - Removing data from the server
const deleteTodoAsync = async (id) => {
    console.log(`Deleting Todo with ID: ${id}...`);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE" // Specify the method as DELETE
        });

        if (!response.ok) {
            throw new Error(`Failed to delete Todo: ${response.status}`);
        }

        // Often a successful delete returns no data, or a success message
        console.log(`Todo ${id} deleted successfully! ✅`);

    } catch (error) {
        console.error(`Error deleting Todo ${id}:`, error.message);
    }
};

