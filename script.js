const button = document.querySelector('button');
const Table1body = document.querySelector('#table1 tbody');
const Table2body = document.querySelector('#table2 tbody');
const Table3body = document.querySelector('#table3 tbody');
const Table1 = document.querySelector('#table1');
const Table2 = document.querySelector('#table2');
const Table3 = document.querySelector('#table3');
Table1.style.display = "none";
Table2.style.display = "none";
Table3.style.display = "none";

//Promise 1 function
function promiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      console.log(data.posts);
      // create a function for showing data into table1
      Table1.style.display = 'table';
      const loadDatatoTable1 = () => {
        // Clear the table body
        Table1body.innerHTML = '';
        // Loop through the post Data array and append each row to the table body
        data.posts.forEach((postdata) => {
            const row = document.createElement('tr');
            row.innerHTML = `
    <td>${postdata.id}</td>
    <td>${postdata.title}</td>
    <td>${postdata.body}</td>
    <td>${postdata.userId}</td>
    <td>${postdata.tags}</td>
    <td>${postdata.reactions}</td>
    `;
            Table1body.appendChild(row);
        }); 
    };
    loadDatatoTable1();
      resolve(true);
    }, 1000);
  });
}

//Promise 2 function
function promiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      Table2.style.display = 'table';
      const loadDatatoTable2 = () => {
        // Clear the table body
        Table2body.innerHTML = '';
        // Loop through the post Data array and append each row to the table body
        data.products.forEach((postdata) => {
            const row = document.createElement('tr');
            const thumbNail = `<img src="${postdata.thumbnail}">`;
            
            row.innerHTML = `
    <td>${postdata.id}</td>
    <td>${postdata.title}</td>
    <td>${postdata.description}</td>
    <td>${postdata.price}</td>
    <td>${postdata.discountPercentage}</td>
    <td>${postdata.rating}</td>
    <td>${postdata.stock}</td>
    <td>${postdata.brand}</td>
    <td>${postdata.category}</td>
    <td>${thumbNail}</td>
    <td><img src="${postdata.images[0]}">
    <img src="${postdata.images[1]}">
    <img src="${postdata.images[2]}">
    </td>
    `;
            Table2body.appendChild(row);
        }); 
    };
    loadDatatoTable2();
      resolve(true);
    }, 2000);
  });
}

//promise 3 function
function promiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      console.log(data);

      Table3.style.display = 'table';
      const loadDatatoTable3 = () => {
        // Clear the table body
        Table3body.innerHTML = '';
        // Loop through the post Data array and append each row to the table body
        data.todos.forEach((postdata) => {
            const row = document.createElement('tr');
            row.innerHTML = `
    <td>${postdata.id}</td>
    <td>${postdata.todo}</td>
    <td>${postdata.completed ? "Yes" : "No"}</td>
    <td>${postdata.userId}</td>
    `;
            Table3body.appendChild(row);
        }); 
    };
    loadDatatoTable3();
      resolve(true);
    }, 3000);
  });
}

button.addEventListener('click', async () => {
    try {
      await promiseAPI1();
      await promiseAPI2();
      await promiseAPI3();
      console.log('All promises resolved successfully!');
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    }
  });